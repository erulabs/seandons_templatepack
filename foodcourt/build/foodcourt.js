/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */
	"use strict";

	var app = angular.module("foodcourt", []);
	var manifest = __webpack_require__(3);

	app.controller("stencilController", function ($scope) {
	  $scope.stencils = manifest.stencil_sets;
	  $scope.stencilsData = {};
	  for (var stencilName in manifest.stencil_sets) {
	    $scope.stencilsData[stencilName] = __webpack_require__(1)("./" + stencilName + "/manifest.json");
	  }

	  var stencilPacks = ["node", "wordpress"];
	  $scope.stencilPacks = {};
	  stencilPacks.forEach(function (stencilPackName) {
	    $scope.stencilPacks[stencilPackName] = __webpack_require__(2)("./" + stencilPackName + ".json");
	  });

	  $scope.base = manifest.base;
	  $scope.api = manifest.api;
	  $scope.framework = manifest.framework;
	  $scope.selectedStencils = {};
	  $scope.numStencils = 0;
	  $scope.manifest_output = false;

	  $scope.selectStencil = function (name) {
	    $scope.selectedStencils[name] = $scope.stencilsData[name];
	    $scope.numStencils += 1;
	    $scope.buildManifest();
	  };

	  $scope.selectStencilPack = function (name) {
	    $scope.stencilPacks[name].stencils.forEach(function (stencilName) {
	      $scope.selectStencil(stencilName.stencil_set);
	    });
	  };

	  $scope.removeStencil = function (name) {
	    $scope.selectedStencils[name] = undefined;
	    delete $scope.selectedStencils[name];
	    $scope.numStencils -= 1;
	    $scope.buildManifest();
	  };

	  $scope.openStencilOptions = function (name) {
	    $scope.selectedStencils[name].open = true;
	  };

	  $scope.closeStencilOptions = function (name) {
	    $scope.selectedStencils[name].open = false;
	  };

	  $scope.prettyJson = function (input) {
	    return JSON.stringify(input, null, 2);
	  };

	  $scope.prettyDeps = function (input) {
	    if (input === undefined) {
	      return "";
	    }
	    return Object.keys(input).join(", ");
	  };

	  $scope.buildManifest = function () {
	    var output = {
	      name: "My_new_cookbook",
	      stencils: []
	    };
	    for (var _name in $scope.selectedStencils) {
	      var stencil = $scope.selectedStencils[_name];
	      var obj = {
	        stencil_set: _name
	      };
	      for (var optName in stencil.options) {
	        var option = stencil.options[optName];
	        if (option.choice !== undefined) {
	          obj[optName] = option.choice;
	        }
	      }
	      output.stencils.push(obj);
	    }
	    $scope.manifest_output = $scope.prettyJson(output);
	  };
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./apache/manifest.json": 6,
		"./application-node/manifest.json": 7,
		"./application-php/manifest.json": 8,
		"./drupal/manifest.json": 9,
		"./elk/manifest.json": 10,
		"./glusterfs/manifest.json": 11,
		"./graphite/manifest.json": 12,
		"./ha-redis/manifest.json": 13,
		"./haproxy/manifest.json": 14,
		"./iojs/manifest.json": 15,
		"./mariadb-galera/manifest.json": 17,
		"./mariadb/manifest.json": 16,
		"./memcached/manifest.json": 18,
		"./newrelic/manifest.json": 19,
		"./nginx/manifest.json": 20,
		"./nodejs/manifest.json": 21,
		"./php/manifest.json": 22,
		"./rackspace_networks/manifest.json": 23,
		"./rails/manifest.json": 24,
		"./redis/manifest.json": 25,
		"./ruby/manifest.json": 26,
		"./statsd/manifest.json": 27,
		"./utility/manifest.json": 28,
		"./varnish/manifest.json": 29,
		"./wordpress/manifest.json": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./node.json": 4,
		"./wordpress.json": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"api": 1,
		"framework": "chef",
		"stencil_sets": {
			"rails": {
				"help": "Creates a rails application recipe based on the type, defaults to Apache"
			},
			"redis": {
				"help": "Creates a redis recipe"
			},
			"ha-redis": {
				"help": "Creates a highly available Redis and HAProxy recipe"
			},
			"memcached": {
				"help": "Creates a memcached recipe"
			},
			"utility": {
				"help": "Creates some helpful utility recipes"
			},
			"newrelic": {
				"help": "Basic newrelic"
			},
			"php": {
				"help": "Creates a standalone PHP instance"
			},
			"nodejs": {
				"help": "Installs NodeJS and provides an NPM LWRP"
			},
			"iojs": {
				"help": "Installs IO.js and provides an NPM LWRP"
			},
			"nginx": {
				"help": "Creates a standalone Nginx instance"
			},
			"apache": {
				"help": "Creates a recipe for installing and tuning Apache2.4"
			},
			"mariadb": {
				"help": "A modern MySQL system"
			},
			"mariadb-galera": {
				"help": "A modern MariaDB powered Galera Cluster"
			},
			"glusterfs": {
				"help": "A GlusterFS Clustering recipe for easy-peasy networked filesystems"
			},
			"rackspace_networks": {
				"help": "A utility for working with Rackspace Cloud Networks, ServiceNet and PublicNet"
			},
			"wordpress": {
				"help": "Creates an example Wordpress application"
			},
			"drupal": {
				"help": "Creates an example Drupal application"
			},
			"application-php": {
				"help": "Creates an example PHP application recipe"
			},
			"application-node": {
				"help": "Creates an example NodeJS application recipe"
			},
			"ruby": {
				"help": "Creates a recipe for installing ruby via RBENV"
			},
			"varnish": {
				"help": "Creates a recipe for installing Varnish"
			},
			"statsd": {
				"help": "Creates a StatsD server recipe - required NodeJS"
			},
			"graphite": {
				"help": "Creates a Graphite instance"
			},
			"elk": {
				"help": "Creates an ElasticSearch, LogStash and Kibana example recipe"
			},
			"haproxy": {
				"help": "Creates a basic HAProxy recipe"
			}
		},
		"base": {
			"files": [
				".gitignore",
				".kitchen.yml",
				".rubocop.yml",
				"Berksfile",
				"CHANGELOG.md",
				"Gemfile",
				"metadata.rb",
				"README.md",
				"Rakefile",
				"recipes/default.rb",
				"test/unit/spec/default_spec.rb",
				"test/unit/spec/spec_helper.rb",
				"test/integration/encrypted_data_bag_secret",
				"test/integration/default/serverspec/spec_helper.rb",
				"test/integration/default/serverspec/default_spec.rb",
				"test/integration/environments/kitchen.json",
				"test/integration/data_bags/users/kitchen_test_user.json"
			],
			"directories": [
				"recipes",
				"templates",
				"test/unit/spec",
				"test/integration/data_bags",
				"test/integration/default/serverspec",
				"test/integration/environments"
			]
		}
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "my_node_cookbook",
		"stencils": [
			{
				"name": "mywebsite.com",
				"stencil_set": "application-node"
			},
			{
				"name": "_nodejs",
				"stencil_set": "nodejs"
			},
			{
				"name": "_nginx",
				"stencil_set": "nginx"
			}
		]
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "my_wordpress_cookbook",
		"stencils": [
			{
				"stencil_set": "wordpress",
				"name": "mywebsite.com",
				"repository": "http://github.com/erulabs/wordpress_test"
			},
			{
				"name": "_php",
				"stencil_set": "php"
			},
			{
				"name": "_nginx",
				"stencil_set": "nginx",
				"example": "php"
			},
			{
				"name": "_mariadb",
				"stencil_set": "mariadb"
			},
			{
				"name": "_haredis",
				"stencil_set": "ha-redis",
				"example": "php"
			},
			{
				"name": "_rackspace_networks",
				"stencil_set": "rackspace_networks"
			}
		]
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "apache",
		"api": 1,
		"default_stencil": "apache",
		"dependencies": {
			"rackspace_iptables": {},
			"ulimit": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_apache"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"apache": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_apache.rb.jinja2",
					"templates/default/apache/apache2.conf.erb": "templates/default/apache2.conf.erb",
					"templates/default/apache/mpm_event.conf.erb": "templates/default/mpm_event.conf.erb",
					"templates/default/apache/ports.conf.erb": "templates/default/ports.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/apache_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "application-node",
		"api": 1,
		"default_stencil": "application-node",
		"dependencies": {
			"application": {},
			"users": {},
			"logrotate": {}
		},
		"stencil_combos": {
			"nodejs": {},
			"nginx": {}
		},
		"options": {
			"name": {
				"help": "Name of the Node application",
				"default": "node_example.com"
			},
			"repository": {
				"help": "The URI of the application's git repository",
				"default": "http://github.com/erulabs/node_test"
			},
			"entry_point": {
				"help": "The name of the script to run (ie: `node server/index.js`)",
				"default": "server/index.js"
			}
		},
		"stencils": {
			"application-node": {
				"files": {
					"recipes/app_<NAME>.rb": "recipes/_nodeapp.rb.jinja2",
					"recipes/role_app.rb": "recipes/role_app.rb",
					"recipes/kitchen_test.rb": "recipes/kitchen_test.rb",
					"templates/default/apps/<NAME>/nginx-site.erb": "templates/default/nginx-site.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/nodeapp_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "application-php",
		"api": 1,
		"default_stencil": "application-php",
		"dependencies": {
			"application": {},
			"users": {},
			"logrotate": {}
		},
		"options": {
			"name": {
				"help": "Name of the PHP application",
				"default": "php_example.com"
			},
			"repository": {
				"help": "The URI of the application's git repository",
				"default": "http://github.com/erulabs/wordpress_test"
			},
			"webserver": {
				"help": "Which webserver should we provide an example for? Choose 'nginx'/'apache'",
				"default": "nginx"
			}
		},
		"stencils": {
			"application-php": {
				"files": {
					"recipes/site_<NAME>.rb": "recipes/_lampapp.rb.jinja2",
					"recipes/db_<NAME>.rb": "recipes/_database.rb",
					"recipes/role_db.rb": "recipes/role_db.rb",
					"recipes/role_web.rb": "recipes/role_web.rb",
					"recipes/kitchen_test.rb": "recipes/kitchen_test.rb",
					"templates/default/sites/<NAME>/apache-site.erb": "templates/default/apache-site.erb",
					"templates/default/sites/<NAME>/nginx-site.erb": "templates/default/nginx-site.erb",
					"templates/default/sites/<NAME>/setup.sql.erb": "templates/default/setup.sql.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/lampapp_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "drupal",
		"api": 1,
		"default_stencil": "drupal",
		"dependencies": {
			"drush": {},
			"application": {},
			"users": {},
			"logrotate": {}
		},
		"options": {
			"name": {
				"help": "Name of the drupal application",
				"default": "_drupal"
			},
			"repository": {
				"help": "The URI of the application's git repository",
				"default": "http://github.com/erulabs/wordpress_test"
			},
			"webserver": {
				"help": "Which webserver should we provide an example for? Choose 'nginx'/'apache'",
				"default": "nginx"
			}
		},
		"stencils": {
			"drupal": {
				"files": {
					"recipes/site_<NAME>.rb": "recipes/_drupal.rb.jinja2",
					"recipes/db_<NAME>.rb": "recipes/_database.rb",
					"recipes/role_db.rb": "recipes/role_db.rb",
					"recipes/role_web.rb": "recipes/role_web.rb",
					"recipes/kitchen_test.rb": "recipes/kitchen_test.rb",
					"templates/default/sites/<NAME>/nginx-site.erb": "templates/default/nginx-site.erb",
					"templates/default/sites/<NAME>/setup.sql.erb": "templates/default/setup.sql.erb",
					"templates/default/sites/<NAME>/settings.php.erb": "templates/default/nginx-site.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/drupal_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "elk",
		"api": 1,
		"default_stencil": "elk",
		"dependencies": {},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_elk"
			}
		},
		"stencils": {
			"elk": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_elk.rb",
					"templates/default/input_rails.conf.erb": "templates/default/input_rails.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/elk_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "glusterfs",
		"default_stencil": "glusterfs",
		"api": 1,
		"dependencies": {
			"rackspace_iptables": {},
			"memcached": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_glusterfs"
			},
			"volume_name": {
				"help": "The name of the first volume",
				"default": "sharedfs"
			},
			"mount_path": {
				"help": "The directory where we'll mount the first volume",
				"default": "/var/sharedfs"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"glusterfs": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_glusterfs.rb.jinja2",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/glusterfs_spec.rb"
				}
			}
		}
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "graphite",
		"api": 1,
		"default_stencil": "graphite",
		"dependencies": {},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_graphite"
			}
		},
		"stencils": {
			"graphite": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_graphite.rb",
					"templates/default/nginx/graphite.conf.erb": "templates/default/graphite.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/graphite_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "ha-redis",
		"default_stencil": "ha-redis",
		"api": 1,
		"dependencies": {
			"redisio": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_haredis"
			},
			"example": {
				"help": "Various premade HA Redis examples",
				"default": "basic"
			}
		},
		"stencils": {
			"ha-redis": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_haredis.rb.jinja2",
					"recipes/_haproxy.rb": "recipes/_haproxy.rb.jinja2",
					"templates/default/haproxy.cfg.erb": "templates/default/haproxy.cfg.erb",
					"test/unit/spec/haredis_spec.rb": "test/unit/spec/haredis_spec.rb"
				}
			}
		}
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "haproxy",
		"api": 1,
		"default_stencil": "haproxy",
		"dependencies": {
			"apt": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_haproxy"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"haproxy": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_haproxy.rb.jinja2",
					"templates/default/haproxy/haproxy.cfg.erb": "templates/default/haproxy.cfg.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/haproxy_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "iojs",
		"api": 1,
		"default_stencil": "iojs",
		"dependencies": {
			"iojs": {},
			"nodejs": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_nodejs"
			}
		},
		"stencils": {
			"nodejs": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_iojs.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/iojs_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "mariadb",
		"default_stencil": "mariadb",
		"api": 1,
		"dependencies": {
			"database": {},
			"apt": {},
			"yum": {},
			"ulimit": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_mariadb"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"mariadb": {
				"options": {},
				"files": {
					"recipes/<NAME>.rb": "recipes/_mariadb.rb.jinja2",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/mariadb_spec.rb",
					"templates/default/mariadb/.my.cnf.erb": "templates/default/.my.cnf.erb",
					"templates/default/mariadb/constants.sql.erb": "templates/default/constants.sql.erb",
					"templates/default/mariadb/my.cnf.erb": "templates/default/my.cnf.erb",
					"templates/default/mariadb/server-seed.erb": "templates/default/server-seed.erb"
				}
			}
		}
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "mariadb-galera",
		"default_stencil": "mariadb-galera",
		"api": 1,
		"dependencies": {
			"database": {},
			"apt": {},
			"yum": {},
			"ulimit": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_galera"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"mariadb-galera": {
				"options": {},
				"files": {
					"recipes/<NAME>.rb": "recipes/_mariadb.rb.jinja2",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/mariadb_spec.rb",
					"templates/default/mariadb/.my.cnf.erb": "templates/default/.my.cnf.erb",
					"templates/default/mariadb/constants.sql.erb": "templates/default/constants.sql.erb",
					"templates/default/mariadb/my.cnf.erb": "templates/default/my.cnf.erb",
					"templates/default/mariadb/server-seed.erb": "templates/default/server-seed.erb"
				}
			}
		}
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "memcached",
		"default_stencil": "default",
		"api": 1,
		"dependencies": {
			"rackspace_iptables": {},
			"memcached": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_memcached"
			}
		},
		"stencils": {
			"default": {
				"files": {
					"recipes/<NAME>.rb": "recipes/default.rb",
					"templates/default/memcached.conf.erb": "templates/default/memcached.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/default_spec.rb"
				}
			}
		}
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "newrelic",
		"api": 1,
		"default_stencil": "default",
		"dependencies": {
			"newrelic": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "newrelic"
			},
			"databag": {
				"help": "Databag name with the newrelic item",
				"default": "secrets"
			}
		},
		"stencils": {
			"default": {
				"files": {
					"recipes/<NAME>.rb": "recipes/default.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/default_spec.rb"
				}
			}
		}
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "nginx",
		"api": 1,
		"default_stencil": "nginx",
		"dependencies": {
			"rackspace_iptables": {},
			"ulimit": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_nginx"
			},
			"example": {
				"help": "Various premade Nginx examples",
				"default": "basic"
			}
		},
		"stencils": {
			"nginx": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_nginx.rb",
					"templates/default/nginx/nginx.conf.erb": "templates/default/nginx.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/nginx_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "nodejs",
		"api": 1,
		"default_stencil": "nodejs",
		"dependencies": {
			"nodejs": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_nodejs"
			},
			"node_version": {
				"help": "The version of NodeJS to install",
				"default": "0.10.33"
			},
			"node_checksum": {
				"help": "The MD5 sum of the NodeJS binary version",
				"default": "1efad7c248b453ee6c62a706f6f86dbe"
			},
			"npm_version": {
				"help": "The version of NPM to install",
				"default": "2.1.3"
			}
		},
		"stencils": {
			"nodejs": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_nodejs.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/nodejs_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "php",
		"api": 1,
		"default_stencil": "php",
		"dependencies": {
			"apt": {},
			"yum": {},
			"composer": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_php"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"php": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_php.rb.jinja2",
					"templates/default/php/php.ini.erb": "templates/default/php/php.ini.erb",
					"templates/default/php/pool.conf.erb": "templates/default/php/pool.conf.erb",
					"templates/default/php/php-fpm.conf.erb": "templates/default/php/php-fpm.conf.erb",
					"templates/default/php/05_opcache.ini.erb": "templates/default/php/05_opcache.ini.erb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "rackspace_networks",
		"default_stencil": "rackspace_networks",
		"api": 1,
		"dependencies": {
			"hostsfile": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_rackspace_networks"
			}
		},
		"stencils": {
			"rackspace_networks": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_rackspace_networks.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/rackspace_networks_spec.rb"
				}
			}
		}
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "rails",
		"api": 1,
		"default_stencil": "rails",
		"dependencies": {
			"rackspace_iptables": {},
			"chef-sugar": {},
			"application": {},
			"rbenv": {}
		},
		"options": {
			"name": {
				"help": "Name of the rails application",
				"default": "rails_example.com"
			},
			"repository": {
				"help": "The URI of the application's git repository",
				"default": "http://github.com/erulabs/rails-hartl"
			}
		},
		"stencils": {
			"rails": {
				"files": {
					"recipes/app_<NAME>.rb": "recipes/_rails.rb.jinja2",
					"recipes/role_web.rb": "recipes/role_web.rb",
					"recipes/kitchen_test.rb": "recipes/kitchen_test.rb",
					"templates/default/apps/<NAME>/nginx.conf.erb": "templates/default/nginx.conf.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/rails_spec.rb"
				}
			}
		}
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "redis",
		"default_stencil": "redis",
		"api": 1,
		"dependencies": {
			"redisio": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_redis"
			},
			"cache": {
				"help": "Defaults to true, disables saving and enables LRU key clearing.",
				"default": "true"
			}
		},
		"stencils": {
			"redis": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_redis.rb.jinja2",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/redis_spec.rb"
				}
			}
		}
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "ruby",
		"api": 1,
		"default_stencil": "ruby",
		"dependencies": {
			"rbenv": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_ruby"
			}
		},
		"stencils": {
			"ruby": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_ruby.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/ruby_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "statsd",
		"api": 1,
		"default_stencil": "statsd",
		"dependencies": {},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_statsd"
			}
		},
		"stencils": {
			"statsd": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_statsd.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/statsd_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "utility",
		"api": 1,
		"default_stencil": "empty",
		"dependencies": {},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "default"
			},
			"sudo": {
				"help": "Enable nopasswd sudo for all, only applies to default recipe stencil",
				"default": "false"
			}
		},
		"stencils": {
			"default": {
				"dependencies": {
					"sudo": {},
					"users": {},
					"rackops_rolebook": {}
				},
				"files": {
					"recipes/<NAME>.rb": "recipes/default.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/default_spec.rb"
				}
			},
			"empty": {
				"files": {
					"recipes/<NAME>.rb": "recipes/empty.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/empty_spec.rb"
				}
			},
			"deploy_guard": {
				"options": {
					"name": {
						"default": "_deploy_script"
					}
				},
				"files": {
					"recipes/<NAME>.rb": "recipes/deploy_guard.rb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/deploy_guard_spec.rb",
					"files/default/deploy_app.sh": "files/default/deploy_app.sh",
					"files/default/deploy_flag.json": "files/default/deploy_flag.json"
				}
			}
		}
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "varnish",
		"api": 1,
		"default_stencil": "varnish",
		"dependencies": {
			"apt": {},
			"yum": {},
			"ulimit": {}
		},
		"options": {
			"name": {
				"help": "Name of the recipe to create",
				"default": "_varnish"
			},
			"example": {
				"help": "Various premade Nginx examples",
				"default": "basic"
			},
			"package_manager": {
				"help": "Which package manager to provide and example for - Choose 'apt'/'yum'",
				"default": "apt"
			}
		},
		"stencils": {
			"varnish": {
				"files": {
					"recipes/<NAME>.rb": "recipes/_varnish.rb.jinja2",
					"templates/default/varnish/default.vcl.erb": "templates/default/default.vcl.erb",
					"templates/default/varnish/varnish.erb": "templates/default/varnish.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/varnish_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"id": "wordpress",
		"api": 1,
		"default_stencil": "wordpress",
		"dependencies": {
			"wp-cli": {},
			"application": {},
			"users": {},
			"logrotate": {}
		},
		"options": {
			"name": {
				"help": "Name of the wordpress application",
				"default": "wordpress_example.com"
			},
			"repository": {
				"help": "The URI of the application's git repository",
				"default": "http://github.com/erulabs/wordpress_test"
			},
			"webserver": {
				"help": "Which webserver should we provide an example for? Choose 'nginx'/'apache'",
				"default": "nginx"
			}
		},
		"stencils": {
			"wordpress": {
				"files": {
					"recipes/site_<NAME>.rb": "recipes/_wordpress.rb.jinja2",
					"recipes/db_<NAME>.rb": "recipes/_database.rb",
					"recipes/role_db.rb": "recipes/role_db.rb",
					"recipes/role_web.rb": "recipes/role_web.rb",
					"recipes/kitchen_test.rb": "recipes/kitchen_test.rb",
					"templates/default/sites/<NAME>/redis-index.php.erb": "templates/default/redis-index.php.erb",
					"templates/default/sites/<NAME>/object-cache.php.erb": "templates/default/object-cache.php.erb",
					"templates/default/sites/<NAME>/nginx-site.erb": "templates/default/apache-site.erb",
					"templates/default/sites/<NAME>/wp-config.php.erb": "templates/default/wp-config.php.erb",
					"templates/default/sites/<NAME>/setup.sql.erb": "templates/default/setup.sql.erb",
					"test/unit/spec/<NAME>_spec.rb": "test/unit/spec/wordpress_spec.rb"
				},
				"options": {}
			}
		}
	}

/***/ }
/******/ ]);