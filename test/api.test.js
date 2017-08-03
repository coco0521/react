const _ = require('lodash');
let DEV_LOCAL = '';
import * as oak from '../src/common/oak/actions';
if (_.isUndefined(DEV_LOCAL)) {
  DEV_LOCAL = 'http://127.0.0.1:1337/platform-app/';
}
test(oak.getOrgTree(), (data) => {
  expect(3).toBe(3);
});
