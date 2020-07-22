<!DOCTYPE html>

<html lang="en-us">

<head>
	<title>Line Extractor</title>
	<link rel="stylesheet" href="style.css" />
	<script src="line-extractor.js"></script>
</head>

<body>
	<h1>
	Line Extractor
	</h1>
	
	<p>
	A tool/utility where you search for keywords, and if a line contains that keyword, it will move the lines to their own file.
	</p>
	
	<p>
	Search Words (One Per Line):<br />
	<textarea id="needle">cookie
gdpr</textarea><br />
	</p>
	
	<div id="container">
		<p>
		File:<br >
		<textarea id="haystack">! AdBlock filters
! moving "cookie" and "gdpr" filters to their own file example
! Start Web Annoyances Ultralist - Generic Filters
###BackToTop
###BacktoTop
###Banner_cookie_1
###CookieNotification
###CybotCookiebotDialog
###GDPRAlertBanner
###GDPRConsentBar
###GDPRCookie
###GoUpWrapper
###Hero-0-FeatureBar-smartphone-Proxy
###PopupSignupForm_0
###ShareToolsMobile
###SocialMediaIconsID
###TopShareMenu
###WNStoryUtils
###___plusone_0
###___plusone_1
###___ratingbadge_0
###__tealiumGDPRecModal
###__tealiumImplicitmodal
###_evidon_banner
###actionbar
###addthis0
###addthisSticky
###addthis_widget
###adhesionUnit
###adv_mobi_edition
###adv_network
###adviceCookies
###alert_cookies
###amp-cookie-notice
###appIntercept
###apply-privacy-policy
###article-share</textarea>
		</p>
		
		<p>
		Output:<br />
		<textarea id="output"></textarea>
		</p>
	</div>
	
	<p>
	<button id="extract-lines">Extract Lines</button>
	<button id="clear">Clear</button>
	</p>
	
	<p>
	Want to report a bug or request a feature? <a href="https://github.com/RedDragonWebDesign/line-extractor/issues">Create an issue</a> on our GitHub.
	</p>
</body>

</html>
