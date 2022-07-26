import React from 'react';
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';


const ContactForm = () => {   
  
      // Open a modal to display success message
      const [open, setOpen] = useState(false);

      const handleClickToOpen = () => {
        setOpen(true);
      };
      
      const handleToClose = () => {
        setOpen(false);
      };

    return (
        <section id="Contact">
            <h2>Proposer un restaurant</h2>

            <div className="contact-form">
              <Formik
                  initialValues={{ username: '', email: '', restaurantName: '', restaurantAddress: '', message: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = 'Veuillez saisir votre nom';
                    }
                    if (!values.email) {
                      errors.email = 'Une adresse e-mail est requise';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = `L'adresse e-mail n'est pas valide`;
                    }
                    if (!values.restaurantName) {
                      errors.restaurantName = 'Veuillez saisir le nom du restaurant';
                    }
                    if (!values.restaurantAddress) {
                        errors.restaurantAddress = `Veuillez saisir l'adresse du restaurant`;
                    }
                    if (!values.message) {
                      errors.message = 'Veuillez saisir votre message';
                    }
                    return errors;
                  }}
                  onSubmit={(values, 
                    { setSubmitting, resetForm }) => {
                      setTimeout(() => {
                        handleClickToOpen();
                        setSubmitting(false);
                        resetForm();
                      }, 400);
                  }}
                >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="username">Nom :</label>
                    <Field type="text" name="username" placeholder="Votre nom" />
                    <ErrorMessage name="username" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <Field type="email" name="email" placeholder="Votre adresse e-mail"/>
                    <ErrorMessage name="email" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="restaurantName">Nom du restaurant :</label>
                    <Field type="text" name="restaurantName" placeholder="Nom du restaurant" />
                    <ErrorMessage name="restaurantName" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="restaurantAddress">Adresse du restaurant :</label>
                    <Field type="text" name="restaurantAddress" placeholder="Adresse du restaurant" />
                    <ErrorMessage name="restaurantAddress" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <Field type="text" name="message" placeholder="Votre message" />
                    <ErrorMessage name="message" component="p" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className='btn'>
                    Envoyer
                  </button>
                </Form>
              )}
              </Formik>
            </div>

            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Message envoyé avec succès !"}</DialogTitle>
                <DialogContent>
                <Typography>
                    Nous vous remercions pour votre message et nous y répondrons dans les plus brefs délais.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleToClose} 
                        color="primary" autoFocus>
                    Fermer
                </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}
export default ContactForm