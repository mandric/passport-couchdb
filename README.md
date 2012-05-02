# Integrating CouchDB and Passport.JS authentication and authorisation

- merge supplied `local.ini` with your CouchDB installation
- check that node path is correct
- put `app.passport.js` into `/usr/local/lib/couchdb/node/`
- restart CouchDB
- check logfile to see the message passed back:

        [Wed...] [info] [<0.31.0>] Apache CouchDB has started on http://0.0.0.0:5984/
        [Wed...] [info] [<0.94.0>] Daemon "passport" :: listening on port 4000

- do a few basic tests:

        $ curl http://localhost:5984/_passport
        [passport] daemon is up
        $ curl http://localhost:4000/
        [passport] daemon is up
