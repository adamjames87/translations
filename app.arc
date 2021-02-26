@app
begin-app

@static

@http
get /api
get /api/date
get /api/clicks
post /api/clicks

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
