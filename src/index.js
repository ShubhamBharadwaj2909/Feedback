// index.js
const express = require('express');
const app = express();
const path = require('path');
const Feedback = require('./mongodb');
const port = 3010;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const templatePath = path.join(__dirname, "../templates");
app.set("views", templatePath);

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit-feedback', async (req, res) => {
  try {
    // Create a new Feedback document using the form data
    const feedback = new Feedback({
      email: req.body.email,
      assetName: req.body.assetName,
      rating: req.body.rating,
      feedbackType: req.body.feedbackType,
      feedbackDetails: req.body.feedbackDetails
    });

    // Save the feedback document to the database
    await feedback.save();

    res.send('Feedback submitted successfully!');
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).send('Error submitting feedback. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
