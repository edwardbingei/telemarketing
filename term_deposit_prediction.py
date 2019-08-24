
from flask import Flask, render_template, request, jsonify      
import pickle
import numpy as np

app = Flask(__name__)

# Load pretrained Random Forest classifier
with open(r"C:\Users\Edward\Desktop\Data Science\METIS Project 3\Flask app for term deposit\term_deposit.pkl", "rb") as f:
    rdf = pickle.load(f)

# Render the HTML file for the home page
@app.route("/")
def home():
    return render_template('index_new.html')

@app.route("/predict", methods=['POST'])
def predict():
   
    user_input = [int(x) for x in request.form.values()]
    final_features = [np.array(user_input)]
    prediction = rdf.predict_proba(final_features)[:,1]

    output = round(prediction[0], 2)

    return render_template('index_new.html', prediction_text = 'Probability of purchase is {}'.format(output))
     
# Server reloads itself if code changes so no need to keep restarting:
app.run(debug=True)


#  data = [comment]
#         vect = cv.transform(data).toarray()
#         my_prediction = clf.predict(vect)

# @app.route('/predict    ',methods=['POST'])
# def predict():
#     '''
#     For rendering results on HTML GUI
#     '''
#     int_features = [int(x) for x in request.form.values()]
#     final_features = [np.array(int_features)]
#     prediction = model.predict(final_features)

#     output = round(prediction[0], 2)

#     return render_template('index.html', prediction_text='Employee Salary should be $ {}'.format(output))













#     data = request.get_json()
#     return jsonify(model )

#     housing = request.values.get('housing')
#     marketing = request.values.get('marketing')
#     age_slider = request.form['age_slider']
#     balance_slider = request.form['balance_slider']
#     day_slider = request.form['day_slider']

#     # Create a new variable X with the user input variables and my predefined variables (total 9 variables)
#     X = [age_slider,
#     balance_slider, 
#     day_slider,
#     1, # Num_contacts during campaign
#     -1, # days passed after last contact
#     0, # num contacts b4 campgn
#     housing, # housing
#     0, # unknown(contact)
#     marketing] # Success(outcome)
#     return housing, marketing, age_slider, balance_slider, day_slider



