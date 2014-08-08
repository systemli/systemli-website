<?
/*
 Open Source Autodiscover implementation in PHP.
 
 Version: 1.0
 Tested with:
	- Microsoft Exchange Remote Connectivity Analyzer (1.3)
	- iOS 4.3.5
	- Outlook 2010 (SP0)
	- Android 2.3.3
 
 Allows auto configuration of ActiveSync and Outlook (or any other MUA that has
 autodiscover support).
 
 Example Apache vhost configuration (SSL is required for Autodiscover):
 
	<VirtualHost 1.2.3.4:443>
        	ServerName autodiscover.domain.com
        	ServerAdmin webmaster@domain.com
 
        	SSLEngine on
        	SSLCertificateFile      /etc/apache/ssl/certs/apache.domain.com.crt
        	SSLCertificateKeyFile   /etc/apache/ssl/private/apache.domain.com.key
 
		# Force all requests to lowercase. Different MUAs, mobile devices etc
		# request the Autodiscover URL in different cases.
        	RewriteEngine On
       	 	RewriteMap lc int:tolower
        	RewriteCond %{REQUEST_URI} [A-Z]
        	RewriteRule (.*) ${lc:$1} [R=301,L]
 
        	DocumentRoot /var/www/autodiscover/htdocs
        	<Directory />
                	Options +FollowSymLinks -Indexes
               		AllowOverride Options Indexes Limit FileInfo AuthConfig
        	</Directory>
 
       		 Alias /autodiscover/autodiscover.xml /var/www/autodiscover/htdocs/autodiscover.php
 
        	ErrorLog /var/www/autodiscover/logs/error.log
       		CustomLog /var/www/autodiscover/logs/access.log combined
	</VirtualHost>
 
 
------------------------------------------------------------------------------
  Copyright (C) 2011 David Ramsden
 
  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.
 
  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:
 
  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.
 
  David Ramsden david {at} 0wned {dot} it
------------------------------------------------------------------------------
*/
// For other supported protocols and more protocol settings, see:
//  http://technet.microsoft.com/en-us/library/cc511507.aspx
 
// Get contents of request made to Autodiscover.
$request = file_get_contents("php://input");
preg_match("/\<EMailAddress\>(.*?)\<\/EMailAddress\>/", $request, $email_address);



 
/*** Begin Configuration ***/
// ActiveSync URL.
//$_CONFIG['MobileSync']['Url'] = "https://systemli.org/crazy-ActiveSync-directory";


 
// IMAP configuration settings.
$_CONFIG['IMAP']['Server'] = "mail.systemli.org";
$_CONFIG['IMAP']['Port'] = "993";
$_CONFIG['IMAP']['SSL'] = "on";
$_CONFIG['IMAP']['SPA'] = "off";
$_CONFIG['IMAP']['AuthRequired'] = "on";
$_CONFIG['IMAP']['LoginName'] = $email_address[1];
 
// SMTP configuration settings.
$_CONFIG['SMTP']['Server'] = "mail.systemli.org";
$_CONFIG['SMTP']['Port'] = "587";
$_CONFIG['SMTP']['SSL'] = "on";
$_CONFIG['SMTP']['SPA'] = "off";
$_CONFIG['SMTP']['AuthRequired'] = "on";
$_CONFIG['SMTP']['LoginName'] = $email_address[1];
/*** End Configuration ***/
 

 
// XML document heading.
header("Content-Type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
 
// Get the schema from the request.
preg_match("/\<AcceptableResponseSchema\>(.*?)\<\/AcceptableResponseSchema\>/", $request, $schema);
// Determine the type of device requesting Autodiscover.
if (preg_match("/\/mobilesync\//", $schema[1]))
{
	// Mobile device.
	preg_match("/\<EMailAddress\>(.*?)\<\/EMailAddress\>/", $request, $email_address);
	?>
		<Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
			<Response xmlns="<? echo $schema[1]; ?>">
				<Culture>en:en</Culture>
				<User>
					<DisplayName><? echo $email_address[1]; ?></DisplayName>
					<EMailAddress><? echo $email_address[1]; ?></EMailAddress>
				</User>
				<Action>
					<Settings>
						<Server>
							<Type>MobileSync</Type>
							<Url><? echo $_CONFIG['MobileSync']['Url']; ?></Url>
							<Name><? echo $_CONFIG['MobileSync']['Url']; ?></Name>
						</Server>
					</Settings>
				</Action>
			</Response>
		</Autodiscover>
	<?
}
else if (preg_match("/\/outlook\//", $schema[1]))
{
	// MUA (mail client).
	?>
		<Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
			<Response xmlns="<? echo $schema[1]; ?>">
				<Account>
					<AccountType>email</AccountType>
					<Action>settings</Action>
				<?
					// Loop through each configured protocol.
					while(list($protocol, $settings) = each($_CONFIG))
					{
						// Skip ActiveSync protocol.
						if ($protocol == "MobileSync") continue;
					?>
						<Protocol>
							<Type><? echo $protocol; ?></Type>
					<?
						// Loop through each setting for this protocol.
						while(list($setting, $value) = each($settings))
						{
							echo "\t\t\t\t\t\t\t<$setting>$value</$setting>\n";
						}
					?>
						</Protocol>
					<?
					}
				?>
				</Account>
			</Response>
		</Autodiscover>
	<?
}
else
{
	// Unknown.
	list($usec, $sec) = explode(' ', microtime());
	?>
		<Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
			<Response>
				<Error Time="<? echo date('H:i:s', $sec) . substr($usec, 0, strlen($usec) - 2); ?>" Id="2477272013">
					<ErrorCode>600</ErrorCode>
					<Message>Invalid Request</Message>
					<DebugData />
				</Error>
			</Response>
		</Autodiscover>
	<?
}
?>