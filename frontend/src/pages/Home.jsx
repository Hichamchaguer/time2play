import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFutbol,
  FaCalendarCheck,
  FaClock,
  FaPhone,
  FaUsers,
  FaMoneyCheckAlt,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaCreditCard,
  FaShieldAlt,
} from "react-icons/fa";


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full text-white overflow-hidden">
      {/* ---------------------------------- HEADER ---------------------------------- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <img
          src="/images/T2P-removebg-preview.png"
          alt="T2P"
          className="h-17 w-17 drop-shadow-xl"
        />
        <nav className="flex gap-10 text-lg font-medium items-center">
          {["Fonctionnalités", "Découvrir", "Contact", "Paiement", "Connexion"].map(
            (link, i) => (
              <motion.a
                key={i}
                href={`#${link.toLowerCase()}`}
                className={`relative cursor-pointer group transition duration-300 ${
                  isScrolled
                    ? "text-blue-600 hover:text-green-600"
                    : "text-white hover:text-green-300"
                }`}
              >
                <span>{link}</span>
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 ${
                    isScrolled ? "bg-green-600" : "bg-green-300"
                  } group-hover:w-full`}
                ></span>
              </motion.a>
            )
          )}
        </nav>
      </header>

      {/* ---------------------------------- HERO VIDEO ---------------------------------- */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 h-full w-full object-cover brightness-50"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        {/* TEXT LEFT SIDE */}
        <div className="relative z-10 flex flex-col justify-center h-full text-left px-10 md:px-20 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Bienvenue à <span className="text-green-400">Time2Play</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl mb-6"
          >
            Réserve ton terrain en un seul clic. Simple. Rapide. Professionnel.
          </motion.p>
          {/* BUTTON RÉSERVER */}
          <motion.a
            href="/reservation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white/20 text-white rounded-lg text-lg font-bold shadow-xl hover:bg-green-600 transition inline-block w-fit"
          >
            Réserver
          </motion.a>
        </div>
      </div>

      {/* ---------------------------------- FONCTIONNALITÉS ---------------------------------- */}
      <section id="fonctionnalités" className="py-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-black-600">
          Fonctionnalités
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 md:px-24">
          {[
            {
              icon: <FaFutbol />,
              title: "Réservation en ligne",
              desc: "Réserver facilement votre terrain de foot en ligne et économiser du temps.",
            },
            {
              icon: <FaCalendarCheck />,
              title: "Mise en relation des joueurs",
              desc: "Trouver des partenaires de jeu de manière rapide et facile grâce à notre plateforme de mise en relation de joueurs.",
            },
            {
              icon: <FaUsers />,
              title: "Système de nivellement",
              desc: "Notre système de nivellement vous permet de jouer avec des joueurs de niveaux similaires pour des parties équilibrées.",
            },
            {
              icon: <FaClock />,
              title: "Disponibilité en Temps Réel",
              desc: "Vois immédiatement les créneaux libres.",
            },
            {
              icon: <FaMoneyCheckAlt />,
              title: "Paiement Sécurisé",
              desc: "Payez directement depuis l'application en toute sécurité.",
            },
            {
              icon: <FaStar />,
              title: "Avis & Notation",
              desc: "Note ton expérience et découvre les meilleurs terrains.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, backgroundColor: "#16a34a" }}
              className="p-8 rounded-2xl shadow-xl bg-gray-100 text-center transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl text-green-500 mx-auto mb-4 group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ---------------------------------- TÉMOIGNAGES ---------------------------------- */}
      <section id="témoignages" className="py-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ils parlent de nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 md:px-20">
          {[
            {
              name: "Yassine",
              img: "/images/user1.jpg",
              text: "Grâce à Time2Play, j'ai pu rencontrer des joueurs de mon niveau et améliorer mon jeu tout en m'amusant. Je recommande vivement cette application pour tous les passionnés du foot !",
            },
            {
              name: "Mohamed",
              img: "/images/user4.jpg",
              text: "Time2Play m'a permis de réserver facilement un terrain en ligne et de diviser les coûts avec mes amis en utilisant leur fonctionnalité de paiement. Maintenant, on peut jouer plus souvent sans se ruiner !",
            },
            {
              name: "Sara",
              img: "/images/user3.jpg",
              text: "Avec Time2Play, j'ai rejoint une communauté de sportifs motivés et passionnés qui m'ont aidé à progresser et à atteindre mes objectifs. C'est génial de pouvoir partager ses scores et sa progression avec d'autres joueurs.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 shadow-sm transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="italic text-lg mb-2">"{t.text}"</p>
              <h4 className="text-green-500 text-xl font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------- CONTACT ---------------------------------- */}
      <section id="contact" className="py-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-10 text-black-600">
          Contactez-nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 md:px-20 items-center">
          {/* IMAGE */}
          <img
            src="/images/contact.jpg"
            alt="Contact"
            className="rounded-3xl shadow-2xl w-full"
          />
          {/* FORMULAIRE */}
          <form className="bg-gray-100 p-8 rounded-2xl shadow-xl text-black">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 mb-4 border rounded-lg"
            ></textarea>
            <button
              type="button"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-green-400 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------- FOOTER ---------------------------------- */}
      <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  src="/images/T2P-removebg-preview.png"
                  alt="Time2Play"
                  className="h-16 w-16"
                />
                <h3 className="text-2xl font-bold text-green-600">Time2Play</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Time2Play révolutionne la réservation de terrains de sport. Simple, rapide et efficace, nous connectons les passionnés de sport aux meilleurs terrains.
              </p>
              <div className="flex space-x-6">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-green-600 hover:text-green-700 transition-colors text-lg font-medium"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-800">Liens rapides</h4>
              <ul className="space-y-3">
                {["Accueil", "Fonctionnalités", "Témoignages", "Contact", "Nos Terrains"].map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2"
                    >
                      <span className="text-green-500">→</span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-800">Légal</h4>
              <ul className="space-y-3">
                {["Mentions légales", "Politique de confidentialité", "CGU", "CGV", "Cookies"].map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Time2Play | Tous droits réservés {" "}
              
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;