TUBSy uses [Grunt][] for automating mundane tasks.

  [Grunt]: http://gruntjs.com

Prerequisite: Node Package Manager (npm)

Install Grunt with npm: `npm install -g grunt-cli`

Install all the needed plugins (input is package.json): `npm install`

Run Grunt: `grunt`
You should get a minimized version of tubsy.js (tubsy.min.js) in the out-directory.

Note! In Debian based systems, you might need to do this: `ln -s /usr/bin/nodejs /usr/bin/node`
