from flask import Flask, request, jsonify

app = Flask(__name__)

@app.get("/hello")
def hello():
    name = request.args.get("name", "Mundo")
    return jsonify({"message": f"Hola {name} desde Docker!"})

if __name__ == "__main__":
    # host 0.0.0.0 para que funcione igual en Docker
    app.run(host="0.0.0.0", port=5000)
