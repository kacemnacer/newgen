<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>	
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard : Mobile Number Tracker</title>
    <meta name="description" content="100% Free & No. 1 mobile number tracker online software on all over the world. Locate any cellphone in only 3 minutes, easy without having to install anything">
    <meta itemprop="name" content="Mobile Number Tracker - Phone Locator (100% Free) ">
    <meta itemprop="description" content="100% Free and No. 1 mobile number tracker online software on all over the world. Locate any cellphone in only 3 minutes, easy without having to install anything.">
    <meta itemprop="image" content="assets/img/mobile-number-tracker.png">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Mobile Number Tracker - Phone Locator (100% Free) ">
    <meta property="og:description" content="100% Working and No. 1 mobile number tracker online software on all over the world. Locate any cellphone in only 3 minutes, easy without having to install anything.">
    <meta property="og:image" content="assets/img/mobile-number-tracker.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mobile Number Tracker - Phone Locator (100% Free) ">
    <meta name="twitter:description" content="100% Free and No. 1 mobile number tracker online software on all over the world. Locate any cellphone in only 3 minutes, easy without having to install anything.">
    <meta name="twitter:image" content="assets/img/mobile-number-tracker.png">
	<link href="assets/css/main.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
</head>
<body oncontextmenu="return false;">
<ul class="page_nav_mobile">
	<li id="mobile_site_index">
		<a href="#" class="curr">
			<i class="si si-dashboard">
				<i class="hide">0</i>
			</i>
			<span>Dashboard</span>
		</a>
	</li>
	<li id="mobile_phone_data_index">
		<a href="#" class="">
			<i class="si si-app_activity">
				<i class="hide">0</i>
			</i>
			<span>Social apps</span>
		</a>
	</li>
	<li id="mobile_timeline_index">
		<a href="#" class="">
			<i class="si si-apptimeline">
				<i class="hide">0</i>
			</i>
			<span>Location history</span>
		</a>
	</li>
	<li id="mobile_alert_index">
		<a href="#" class="">
			<i class="si si-toggle_alerts">
				<i class="hide">0</i>
			</i>
			<span>Calls & Messages</span>
		</a>
	</li>
</ul>
<div class="page_header">
	<div class="logo_box">
		<a href="#" class="logo logo_brand">Tracker</a>
	</div>
</div>
<?php
$number = isset($_GET['number']) ? $_GET['number'] : "null";
$country = isset($_GET['country']) ? $_GET['country'] : "null";
?>

<div class="page_container ">
	<div class="main_sidebar">
		<div class="sidebar_menu">
			<ul class="side_nav">
				<li id="site_index" class="curr">
					<a href="#" >
						<i class="si si-dashboard"></i>
						<span> Dashboard <small class="new_tips">+9</small> </span>
					</a>
				</li>
				<li id="phone_data_index" class="nav side_menu ">
					<a href="javascript:void(0)" class="">
						<i class="si si-app_activity"></i>
						<span>Data
							<small class="new_tips hide">0</small>
						</span>
					</a>
					<ul style="display: block;">
						<li id="sms_index" class=" ">
							<a href="#" class="">
								<i class="si si-message"></i>
								<span>Messages
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="call_log_index" class=" ">
							<a href="#" class="">
								<i class="si si-call"></i>
								<span>Calls
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>

						<li id="location_index" class=" ">
							<a href="#" class="">
								<i class="si si-location_mark"></i>
								<span>Locations
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="geo_fence_index" class=" ">
							<a href="#" class="">
								<i class="si si-geo_fence"></i>
								<span>Geofencing
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="screenshots_index" class=" ">
							<a href="#" class="">
								<i class="si si-screenshot"></i>
								<span>Capture Screenshots
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="auto_snapshot_index" class=" ">
							<a href="#" class="">
								<i class="si si-appshot"></i>
								<span>Smart Capture
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="key_logger_index" class=" ">
							<a href="#" class="">
								<i class="si si-keylogger"></i>
								<span>Keylogger
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="images_index" class=" ">
							<a href="#" class="">
								<i class="si si-photos"></i>
								<span>Photos
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="voices_index" class=" ">
							<a href="#" class="">
								<i class="si si-voice"></i>
								<span>Voices
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="documents_index" class=" ">
							<a href="#" class="">
								<i class="si si-document"></i>
								<span>Documents
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="mail_index" class=" ">
							<a href="#" class="">
								<i class="si si-mail"></i>
								<span>E-mail
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="contacts_index" class=" ">
							<a href="#" class="">
								<i class="si si-contacts"></i>
								<span>Contacts
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
						<li id="browser_log_index" class=" ">
							<a href="#" class="">
								<i class="si si-history"></i>
								<span>Browser History
									<small class="new_tips hide">0</small>
								</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<div class="main_content ">
		<div class="main_update hide">
			<button type="submit" class="btn btn-default"></button>
		</div>
		<div class="main_header">
			<div class="other_btn">
				<a href="#" class="btn btn-default btn-secondary btn-border" style="border-radius:0;border-width: 2px;padding: 6px 12px;">
					Date export
				</a>
			</div>
			<h1 class="column">Dashboard</h1>
		</div>
		<div class="commonAlert"></div>
		<div id="dashboard" class="main_body">
			<div class="row">
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-header panel-header-noborder">
							<div class="panel-options">Currently:
								<strong class="color_red current_status">Active</strong>
							</div>
							<h3 class="title">Device Information</h3>
						</div>
						<div class="panel-body">
							<div class="row device_info">
								<div class="col-lg-12 col-sm-12">
									<i class="si si-phone"></i>
									<span>Device number : </span>
									<strong>+<?php echo $number; ?></strong>
								</div>
								<div class="col-lg-12 col-sm-12">
									<i class="si si-sim"></i>
									<span>Carrier : <span class='blured'>MARSOSRDG</span></span>
									<strong></strong>
								</div>
								<div class="col-lg-12 col-sm-12">
									<i class="si si-location"></i>
									<strong>Owner : <span class='blured'>DANIAL MSOALIEE</span></strong>
								</div>
								<div class="col-lg-12 col-sm-12">
									<i class="si si-location"></i>
									<strong>Country : <?php echo $country; ?></strong>
								</div>
							</div>
						</div>
					</div>
					<div class="panel panel-defaul hidden-mobile">
						<div class="panel-header">
							<div class="panel-options">
								<a href="#" class="btn-arrow">More</a>
							</div>
							<h3 class="title">New Calls</h3>
						</div>
						<div class="panel-body">
							<div class="stacked_bars_panel dash_call">
								<div class="no_detected"><?php echo rand(4,9); ?> new calls today</div>
							</div>
						</div>
					</div>
					<div class="panel panel-default hidden-mobile">
						<div class="panel-header">
							<div class="panel-options">
								<a href="#" class="btn-arrow">More</a>
							</div>
							<h3 class="title">New Messages</h3>
						</div>
						<div class="panel-body">
							<div class="stacked_bars_panel dash_mess">
								<div class="no_detected"><?php echo rand(11,15); ?> New Messages today</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-header">
							<div class="panel-options">
								<a href="#" class="btn-arrow">More</a>
							</div>
							<h3 class="title">Current Location</h3>
						</div>
						<div class="panel-body">
							<div id="location" class="das_map panel-box" style="z-index: 0;">
								<div class="no-results">
									<div class="inline">
										<div id="gmapbg" class="c-content-contact-1-gmap" style="height: 400px;">
											<img src="assets/img/map.jpg" style="-webkit-filter: blur(5px); filter: blur(5px)" alt="image profil">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</div>
<div class="main_footer">
	<p>2021 ® All rights Reserved</p>
	CAUTION: Use this system for informational purposes only
</div>


<!-- =========================================== -->
<!-- =============== Locker code =============== -->
<!-- =========================================== -->

<script type="text/javascript">
    var CPABUILDSETTINGS={"it":2029652,"key":"e8e4c"};
</script>
<script src="https://d13nu0oomnx5ti.cloudfront.net/b8a20ef.js"></script>

<!-- =========================================== -->
<!-- =============== Locker code =============== -->
<!-- =========================================== -->


<script>CPABuildLock();</script>
</body>
</html>