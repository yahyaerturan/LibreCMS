<?php
/**
 * LibreCMS - Copyright (C) Diemen Design 2019
 *
 * Core - Change Database Tables Prefix
 *
 * changeprefix.php version 2.0.2
 *
 * LICENSE: This source file may be modifired and distributed under the terms of
 * the MIT license that is available through the world-wide-web at the following
 * URI: http://opensource.org/licenses/MIT.  If you did not receive a copy of
 * the MIT License and are unable to obtain it through the web, please
 * check the root folder of the project for a copy.
 *
 * @category   Administration - Core - Change Database Tables Prefix
 * @package    core/changeprefix.php
 * @author     Dennis Suitters <dennis@diemen.design>
 * @copyright  2014-2019 Diemen Design
 * @license    http://opensource.org/licenses/MIT  MIT License
 * @version    2.0.2
 * @link       https://github.com/DiemenDesign/LibreCMS
 * @notes      This PHP Script is designed to be executed using PHP 7+
 * @changes    v2.0.2 Add i18n.
 * @changes    v2.0.2 Fix Notifications.
 */
echo'<script>';
if(session_status()==PHP_SESSION_NONE)session_start();
$dbprefix=isset($_POST['dbprefix'])?filter_input(INPUT_POST,'dbprefix',FILTER_SANITIZE_STRING):'';
$dbprefix=trim($dbprefix);
require'db.php';
$config=$db->query("SELECT language FROM `".$prefix."config` WHERE id=1")->fetch(PDO::FETCH_ASSOC);
function localize($t){
  static $tr=NULL;
  global $config;
  if(is_null($tr)){
    if(file_exists('core'.DS.'i18n'.DS.$config['language'].'.txt'))
      $lf='core'.DS.'i18n'.DS.$config['language'].'.txt';
    else
      $lf='core'.DS.'i18n'.DS.'en-AU.txt';
    $lfc=file_get_contents($lf);
    $tr=json_decode($lfc,true);
  }
  if(is_array($tr)){
    if(!array_key_exists($t,$tr))
      echo'Error: No "'.$t,'" Key in '.$config['language'];
    else
      return$tr[$t];
  }else
    echo'Error: '.$config['language'].' is malformed';
}
if($settings['database']['prefix']!=$dbprefix){
  $result=$db->query("SHOW TABLES FROM `".$settings['database']['schema']."` LIKE '%".$settings['database']['prefix']."%'");
  $renamed=$failed=0;
  $error='';
  while($row=$result->fetch(PDO::FETCH_NUM)){
    $table_name=$row[0];
    if($settings['database']['prefix']!='')
      $new_table_name=str_replace($settings['database']['prefix'],$dbprefix,$table_name);
    else
      $new_table_name = $dbprefix.$table_name;
    $sql=$db->query("RENAME TABLE `".$settings['database']['schema']."`.`".$table_name."` TO `".$settings['database']['schema']."`.`".$new_table_name."`");
    if($sql){
      $renamed++;
      $error.="Table `".$table_name."` renamed to `".$new_table_name."`.<br>";
    }else{
      $failed++;
      $error.="Renaming of table `".$table_name."` has failed: ".$db->errorInfo()."<br>";
    }
  }
  $error.=$renamed." tables were renamed, ".$failed." failed.<br>";
  $txt='[database]'.PHP_EOL.
       'prefix = '.$dbprefix.PHP_EOL.
       'driver = '.$settings['database']['driver'].PHP_EOL.
       'host = '.$settings['database']['host'].PHP_EOL.
       (isset($settings['database']['port'])==''?';port = 3306'.PHP_EOL:'port = '.$settings['database']['port'].PHP_EOL).
       'schema = '.$settings['database']['schema'].PHP_EOL.
       'username = '.$settings['database']['username'].PHP_EOL.
       'password = '.$settings['database']['password'].PHP_EOL.
       '[system]'.PHP_EOL.
       'version = '.time().PHP_EOL.
       'url = '.$settings['system']['url'].PHP_EOL.
       'admin = '.$settings['system']['admin'].PHP_EOL;
  if(file_exists('config.ini'))unlink('config.ini');
  $oFH=fopen("config.ini",'w');
  fwrite($oFH,$txt);
  fclose($oFH);
  echo'window.top.window.toastr["danger"]("'.$error.'");';
}else
  echo'window.top.window.toastr["danger"]("'.localize('alert_changeprefix_danger_error').' `'.$dbprefix.'`"});';
echo'window.top.window.$("#blocker").remove();</script>';
