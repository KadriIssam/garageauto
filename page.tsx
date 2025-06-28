"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    registration: "",
    brand: "",
    model: "",
    firstRegistrationDate: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Vérifications de sécurité en arrière-plan
    // Dans une application réelle, ces vérifications seraient effectuées côté serveur :
    // - Vérification du temps de soumission (trop rapide = bot)
    // - Vérification des champs cachés (honeypot)
    // - Analyse des modèles de comportement
    // - Limitation du taux de soumission par IP

    // Simulation d'un délai de traitement
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  const services = [
    { value: "entretien", label: "Entretien" },
    { value: "mecanique", label: "Mécanique" },
    { value: "freinage", label: "Freinage" },
    { value: "diagnostic", label: "Diagnostic" },
    { value: "carrosserie", label: "Carrosserie" },
    { value: "autre", label: "Autre" },
  ]

  const faqs = [
    {
      question: "Les pièces proposées sont-elles d'origines?",
      answer:
        "Nous proposons à la fois des pièces d'origine constructeur et des pièces de qualité équivalente. Nous vous conseillons toujours la meilleure option en fonction de votre véhicule et de vos besoins.",
    },
    {
      question: "Quelle garantie offrez-vous à vos clients?",
      answer:
        "Toutes nos réparations sont garanties 1 an pièces et main d'œuvre. Les pièces utilisées bénéficient également de la garantie du fabricant.",
    },
    {
      question: "Qui êtes-vous?",
      answer:
        "Nous sommes le Garage de la Mairie SARL KADRI, une entreprise familiale établie à Gennevilliers depuis 2007. Notre équipe de mécaniciens qualifiés s'engage à vous offrir un service de qualité pour l'entretien et la réparation de votre véhicule.",
    },
    {
      question: "Comment faire pour modifier ou annuler un rendez-vous une fois la réservation validée sur le site ?",
      answer:
        "Pour modifier ou annuler un rendez-vous, vous pouvez nous contacter par téléphone au 01 46 85 13 91 ou par email à contact@garagedelamairie-kadri.com au moins 24 heures à l'avance.",
    },
    {
      question: "Que se passe-t-il si ma voiture nécessite des opérations supplémentaires non prévues?",
      answer:
        "Si nous détectons des problèmes supplémentaires lors de l'intervention, nous vous contactons systématiquement pour vous informer et obtenir votre accord avant d'effectuer toute réparation supplémentaire.",
    },
    {
      question: "Une bombe anti-crevaison est-elle utile ?",
      answer:
        "Une bombe anti-crevaison peut être utile en dépannage temporaire, mais ne remplace pas une réparation professionnelle. Nous recommandons de faire vérifier votre pneu dès que possible après utilisation d'une bombe anti-crevaison.",
    },
    {
      question: "Conduite en hiver ?",
      answer:
        "Pour la conduite en hiver, nous recommandons de vérifier l'état de vos pneus, de votre batterie et de votre système de chauffage. N'hésitez pas à nous consulter pour une révision hivernale complète de votre véhicule.",
    },
    {
      question: "Vous constatez une surconsommation de carburant ?",
      answer:
        "Une surconsommation peut être due à plusieurs facteurs : filtre à air encrassé, pneus sous-gonflés, problème d'injection, etc. Nous pouvons effectuer un diagnostic complet pour identifier et résoudre ce problème.",
    },
    {
      question: "Peut-on mélanger différents types d'huile ?",
      answer:
        "Il est fortement déconseillé de mélanger différents types d'huile moteur. Cela peut affecter les performances et la longévité de votre moteur. Consultez-nous pour connaître l'huile adaptée à votre véhicule.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-blue py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-montserrat text-4xl font-bold md:text-5xl">CONTACT</h1>
            <p className="mt-6 text-lg text-gray-300">UNE QUESTION? BESOIN D'UN CONSEIL ?</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-navy-blue md:text-3xl">Nos coordonnées</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-navy-blue" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold">Téléphone</h3>
                    <p className="mt-1 text-gray-600">01 46 85 13 91</p>
                    <p className="mt-1 text-gray-600">06 74 06 69 92</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-navy-blue" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold">Adresse</h3>
                    <p className="mt-1 text-gray-600">
                      4 RUE DU PUITS GUYON
                      <br />
                      92230 GENNEVILLIERS
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-navy-blue" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold">Email</h3>
                    <p className="mt-1 text-gray-600">contact@garagedelamairie-kadri.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-navy-blue" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold">Horaires d'ouverture</h3>
                    <div className="mt-1 space-y-1 text-gray-600">
                      <p>Lundi - Vendredi : 8h30 - 12h00 | 14h00 - 18h30</p>
                      <p>Samedi : 9h00 - 12h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-montserrat text-xl font-semibold text-navy-blue">Plan d'accès</h3>
                <div className="mt-4 h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                  {/* In a real application, this would be a Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.2039872433366!2d2.2922814!3d48.9267499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f7c2d3a0c8b%3A0x5c0f2c1d5c8b5c8b!2s4%20Rue%20du%20Puits%20Guyon%2C%2092230%20Gennevilliers!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-montserrat text-2xl font-bold text-navy-blue md:text-3xl">Formulaire de contact</h2>
              <p className="mt-2 text-gray-600">Veuillez entrer les informations et nous vous contacterons.</p>

              {!submitted ? (
                <Card className="mt-6">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">NOM *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Nom"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="email">EMAIL</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">TÉLÉPHONE</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Téléphone"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="registration">NUMÉRO D'IMMATRICULATION</Label>
                        <Input
                          id="registration"
                          name="registration"
                          value={formData.registration}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="AB-123-CD"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="brand">MARQUE</Label>
                          <Input
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Marque du véhicule"
                          />
                        </div>
                        <div>
                          <Label htmlFor="model">MODÈLE</Label>
                          <Input
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Modèle du véhicule"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="firstRegistrationDate">DATE DE PREMIÈRE MISE EN CIRCULATION</Label>
                          <Input
                            id="firstRegistrationDate"
                            name="firstRegistrationDate"
                            type="date"
                            value={formData.firstRegistrationDate}
                            onChange={handleChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">SERVICE</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                          >
                            <SelectTrigger id="service" className="mt-1">
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">MESSAGE</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Message"
                          rows={5}
                        />
                      </div>

                      <div className="mt-6">
                        <Button type="submit" className="w-full">
                          ENVOYER
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="mt-6">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h2 className="font-montserrat text-2xl font-bold text-navy-blue">Message envoyé !</h2>
                      <p className="text-gray-600">
                        Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                      </p>
                      <Button className="mt-6" onClick={() => setSubmitted(false)}>
                        Envoyer un nouveau message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-montserrat text-2xl font-bold text-navy-blue md:text-3xl">
            Les questions fréquemment demandées
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-montserrat font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-navy-blue py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-montserrat text-2xl font-bold md:text-3xl">
              Obtenez notre réduction promo pour votre voiture ?
            </h2>
            <p className="mt-4 text-lg text-gray-300">ABONNEZ-VOUS AUJOURD'HUI ET ÉCONOMISEZ!</p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input
                type="email"
                placeholder="Votre adresse de courrier électronique"
                className="w-full max-w-md bg-white text-gray-900"
              />
              <Button className="w-full bg-white text-navy-blue hover:bg-gray-100 sm:w-auto">ABONNEZ-VOUS</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
