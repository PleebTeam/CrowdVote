var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	passport = require('passport'),
	facebookStrategy = require('passport-facebook').Strategy,
	googleStrategy = require('passport-google').Strategy,
	twitterStrategy = require('passport-twitter').Strategy,
	userCtrl = require('./controllers/userCtrl.js'),
	nomineeCtrl = require('./controllers/nomineeCtrl.js'),
	config = require('./config.js');
