from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient("mongodb+srv://yunny:yun93@cluster0.cj6kcqw.mongodb.net/?retryWrites=true&w=majority")
db = client.miniproject

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/miniproject", methods=["POST"])
def miniproject_post():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    doc = {
        'comment': comment_receive,
        'name': name_receive
      }
    db.miniproject.insert_one(doc)

    return jsonify({'msg':'고맙습니다!!'})

@app.route("/miniproject", methods=["GET"])
def miniproject():
    comment_list = list(db.miniproject.find({}, {'_id': False}))
    return jsonify({'comments':comment_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)