<?php
  require_once("../models/admin.php");
  require_once("dbcontroller.php");
  require_once("partnercontroller.php");
  require_once("../models/partner.php");

  class admincontroller extends person{
    private admin $admin;
    private $partner;

    protected $db;

    public function __construct1(){
    }

    public function __construct2(admin $admin){
      $this->admin=$admin;
    }

    public function getAllpartners(){
      
    }
  }