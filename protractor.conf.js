exports.config = {
  specs: ['./spec/*.js'],
  baseUrl: 'http://ec2-52-48-95-132.eu-west-1.compute.amazonaws.com',
  capabilities: {
    'browserName': 'firefox'
  },
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
