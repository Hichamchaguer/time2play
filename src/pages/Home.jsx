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
  FaFacebook, FaInstagram, FaTwitter, 
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
          src="images/T2P-removebg-preview.png"
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
        </nav>                                                                                                           t555
      </header>

      {/* ---------------------------------- HERO VIDEO ---------------------------------- */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 h-full w-full object-cover brightness-50"
        >
          <source src="videos/video2.mp4" type="video/mp4" />
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

      {/* ---------------------------------- EXPÉRIENCE DE JEUX ---------------------------------- */}
      <section id="expérience" className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Expérience de jeux
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Comment ça fonctionne ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <motion.a
              href="/reservation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="block cursor-pointer"
            >
              <div className="mb-4">
                <img
                  src="images/jeux1.jpg"
                  alt="Communauté Time2Play"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Comment trouver mes amis et faire partie de la communauté Time2Play
              </h3>
            </motion.a>

            {/* Carte 2 */}
            <motion.a
              href="/reservation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block cursor-pointer"
            >
              <div className="mb-4">
                <img
                  src="images/jeux3.jpg"
                  alt="Réservation terrain"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Comment réserver un terrain dans votre Club préféré
              </h3>
            </motion.a>

            {/* Carte 3 */}
            <motion.a
              href="/reservation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block cursor-pointer"
            >
              <div className="mb-4">
                <img
                  src="images/jeux4.jpg"
                  alt="Paiement divisé"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Comment diviser le paiement d'une réservation via l'application Time2Play
              </h3>
            </motion.a>
          </div>
        </div>
      </section>

    {/* ---------------------------------- SECTION : SLIDER TERRAINS ---------------------------------- */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Découvrez l’application Time2Play
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Découvrez nos meilleurs terrains et réservez votre créneau
        </p>

        {/* SLIDER */}
        <motion.div
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory 
                    [-ms-overflow-style:none] [scrollbar-width:none] 
                    [&::-webkit-scrollbar]:hidden"
        >

          {[
            { id: 1, title: "Stade Elite", description: "Terrain synthétique.", image: "images/terrain1.jpg" },
            { id: 2, title: "Arena Sport", description: "Gazon naturel.", image: "images/terrain2.jpg" },
            { id: 3, title: "Foot Park", description: "3 terrains.", image: "images/terrain3.jpg" },
            { id: 4, title: "Urban Soccer", description: "Couvert climatisé.", image: "images/terrain9.jpg" },
            { id: 5, title: "Green Field", description: "Historique.", image: "images/terrain5.jpg" },
            { id: 6, title: "Pro Arena", description: "Normes FIFA.", image: "images/terrain6.jpg" },
            { id: 7, title: "Royal Turf", description: "Premium.", image: "images/terrain7.jpg" },
            { id: 8, title: "City Ground", description: "Accès facile.", image: "images/terrain8.jpg" },
            { id: 9, title: "Mega Arena", description: "LED & coaching.", image: "images/terrain4.jpg" },
            { id: 10, title: "SportLine", description: "Moderne.", image: "images/terrain10.jpg" },
          ].map((t) => (

            <motion.div
              key={t.id}
              onClick={() => handleCardClick(t.id)}
              initial={{ opacity: 0.3, scale: 0.8, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, cursor: "pointer" }}
              className="min-w-[260px] bg-white rounded-xl shadow-xl 
                        border border-gray-200 overflow-hidden snap-center
                        transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="h-36 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{t.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{t.description}</p>
              </div>

            </motion.div>

          ))}

        </motion.div>

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
              name: "Robert",
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
                src={t.img.replace(/^\//, '')}
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
      src="images/contact.jpg"
      alt="Contact"
      className="rounded-3xl shadow-2xl w-full"
    />

    {/* FORMULAIRE */}
    <form className="bg-gray-100 p-8 rounded-2xl shadow-xl text-black relative z-10">
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
        className="bg-green-500 text-green px-6 py-3 rounded-lg font-bold w-full hover:bg-green-400 transition"
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
            src="images/T2P-removebg-preview.png"
            alt="Time2Play"
            className="h-16 w-16"
          />
          <h3 className="text-2xl font-bold text-green-600">Time2Play</h3>
        </div>

        <p className="text-gray-600 mb-6 max-w-md">
          Time2Play révolutionne la réservation de terrains de sport. Simple, rapide et efficace,
          nous connectons les passionnés de sport aux meilleurs terrains.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6">
          {[
            { icon: <FaFacebook size={26} />, link: "#" },
            { icon: <FaInstagram size={26} />, link: "#" },
            { icon: <FaTwitter size={26} />, link: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-green-600 hover:text-green-700 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Liens rapides */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-gray-800">Liens</h4>
        <ul className="space-y-3">
          {["Accueil", "Fonctionnalités", "Témoignages", "Contact", "Nos Terrains"].map((link, i) => (
            <li key={i}>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="text-gray-600 hover:text-green-600 transition flex items-center gap-2"
              >
                {link}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>

      {/* Légal */}
      <div>
        <h4 className="text-lg  font-bold mb-4 text-gray-800">Légal</h4>
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

    {/* COPYRIGHT */}
    <div className="border-t border-gray-300 mt-12 pt-8 text-center">
      <p className="text-gray-600">
        © 2025 Time2Play | Tous droits réservés
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;