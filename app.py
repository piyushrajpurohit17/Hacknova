from flask import Flask, render_template, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email
import os
 
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///college.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# db
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(20), nullable=False) 

class FacultyDetails(db.Model):
    facid = db.Column(db.Integer, primary_key=True)
    facname = db.Column(db.String(100), nullable=False)
    mobno = db.Column(db.String(15), nullable=False)
    sub = db.Column(db.String(50), nullable=False)
    dept = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

class StudentDetails(db.Model):
    prn = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    class_ = db.Column(db.String(50), nullable=False) 
    mobno = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    dept = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(20), nullable=False)  
# Forms
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class RegistrationForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    role = StringField('Role', validators=[DataRequired()]) 
    submit = SubmitField('Register')

# routing is from here
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.password == form.password.data:
            login_user(user)
            if user.role == 'Student':
                return redirect(url_for('student_dashboard'))
            elif user.role == 'Teacher':
                return redirect(url_for('faculty_dashboard'))
        flash('Invalid username or password')
    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/student/dashboard')
@login_required
def student_dashboard():
    if current_user.role != 'Student':
        return redirect(url_for('home'))
    student = StudentDetails.query.filter_by(username=current_user.username).first()
    return render_template('student_dashboard.html', student=student)

@app.route('/faculty/dashboard')
@login_required
def faculty_dashboard():
    if current_user.role != 'Teacher':
        return redirect(url_for('home'))
    faculty = FacultyDetails.query.filter_by(username=current_user.username).first()
    return render_template('faculty_dashboard.html', faculty=faculty)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  
    app.run(debug=True)
