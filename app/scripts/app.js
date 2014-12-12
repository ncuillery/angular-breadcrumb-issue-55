'use strict';

/**
 * @ngdoc overview
 * @name angularBreadcrumbIssue55App
 * @description
 * # angularBreadcrumbIssue55App
 *
 * Main module of the application.
 */
angular
  .module('angularBreadcrumbIssue55App', ['ui.router', 'ncy-angular-breadcrumb'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('main.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        ncyBreadcrumb: {
          label: 'About us'
        }
      })
      .state('main.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        ncyBreadcrumb: {
          label: 'Contact us'
        }
      });

    $urlRouterProvider.otherwise('/main');
  });
