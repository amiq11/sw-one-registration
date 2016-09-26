#!/usr/bin/env python
import SimpleHTTPServer
import BaseHTTPServer

class NoCacheHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        SimpleHTTPServer.SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    #SimpleHTTPServer.test(HandlerClass=NoCacheHTTPRequestHandler)
    httpd = BaseHTTPServer.HTTPServer(('127.0.0.1', 8091), NoCacheHTTPRequestHandler)
    sa = httpd.socket.getsockname()
    print "Serving HTTP on %s port %d" % (sa[0], sa[1])
    httpd.serve_forever()
