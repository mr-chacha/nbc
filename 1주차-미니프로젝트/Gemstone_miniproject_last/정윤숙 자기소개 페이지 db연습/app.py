from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient("mongodb+srv://yunny:yun93@cluster0.cj6kcqw.mongodb.net/?retryWrites=true&w=majority")
db = client.miniproject

@app.route('/')
def home():
   return render_template('prac.html')

@app.route("/minitest", methods=["POST"])
def minitest_post():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    doc = {
        'comment': comment_receive,
        'name': name_receive
      }
    db.minitest.insert_one(doc)

    return jsonify({'msg':'고맙습니다!'})

@app.route("/minitest", methods=["GET"])
def minitest():
    comment_list = list(db.minitest.find({}, {'_id': False}))
    return jsonify({'comments':comment_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)