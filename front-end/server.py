from __future__ import print_function # In python 2.7

import MySQLdb
import os


from flask import Flask, send_from_directory, request, redirect, safe_join, render_template
import json

CLIENT_APP_FOLDER = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)



@app.route('/', methods=['GET'])
def home():
	print("kek")
	return render_template('index.html')

# @app.route('/<any(css, js, jsdump, res, app):folder>/<path:filename>')
# def static_stuff(folder, filename):
# 	filepath = safe_join(folder, filename)
# 	return send_from_directory(CLIENT_APP_FOLDER,filepath)


@app.route('/<path:folder>/<path:filename>')
def static_stuff(folder):
	print(folder)
	return send_from_directory(CLIENT_APP_FOLDER,folder)


@app.route('/<path:jsfile>.js')
def home2(jsfile):
	return send_from_directory(CLIENT_APP_FOLDER, jsfile)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port='8000')