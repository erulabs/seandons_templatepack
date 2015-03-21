#
# Cookbook Name:: |{ cookbook['name'] }|
# Recipe :: default
#
# Copyright |{ cookbook['year'] }|, Rackspace
#

node.default['chef_client']['locale'] = 'en_US.UTF-8'
include_recipe 'locale'
ENV['LANG'] = node['locale']['lang']
ENV['LC_ALL'] = node['locale']['lang']

# Include the package manager helper recipes
# mostly used to simply run an "apt-get update" on boot, etc.
case node['platform']
when 'debian', 'ubuntu'
  include_recipe 'apt'
when 'redhat', 'centos', 'fedora', 'amazon', 'scientific'
  include_recipe 'yum'
end

node.default['authorization']['sudo']['passwordless'] = true

# Rackspace support, system users, and PlatformStack by default
include_recipe 'users::sysadmins'
include_recipe 'platformstack::rackops_rolebook'
