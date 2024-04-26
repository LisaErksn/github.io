<!DOCTYPE html>
<html lang="en">
   <head>
      <link href="https://azimut-productions.com/"; rel="canonical">

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="Société de production audiovisuelle : brand content, publicité, vidéo clip, film corporate, film témoignage, captation, film événementiel, documentaire.">
      <meta name="author" content="Sophie Debacker/Lisa Eriksen">
  
      <meta property="og:type" content="video" />
      <meta property="og:url" content="https://azimut-productions.com/" />
      <meta property="og:image" content="https://azimut-productions.com/img/logo-azimut-big-og.jpg" />
      <meta property="og:site_name" content="Azimut Productions" />
      <meta property="og:description" content="Société de production audiovisuelle : brand content, publicité, vidéo clip, film corporate, film témoignage, captation, film événementiel, documentaire." />
  
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="style.css"  rel = "stylesheet" media="screen" >
      <link rel="shortcut icon" href="/img/favicon-azimut.ico"/>
      <link rel="apple-touch-icon" href="/img/favicon-azimut.ico"/>

      <title>Contact - Azimut Productions</title>
   </head>
   <body>


      <!--------------php-------------->
      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Récupérer les données du formulaire
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];
  
      // Adresse e-mail à laquelle vous souhaitez recevoir les messages
      $to = "contact@azimut-productions.com";
  
      // Sujet de l'e-mail
      $subject = "Nouveau message du formulaire de contact";
  
      // Contenu de l'e-mail
      $email_content = "Prénom: $name\n";
      $email_content .= "Email: $email\n";
      $email_content .= "Message:\n$message\n";
  
      // Entêtes de l'e-mail
      $headers = "From: $email\n";
      $headers .= "Reply-To: $email\n";
  
      // Envoyer l'e-mail
         if (mail($to, $subject, $email_content, $headers)) {
             // Afficher un message de succès
            echo '<div class="success-message">Votre message a bien été envoyé.</div>';
         } else {
            // Afficher un message d'erreur
            echo '<div class="error-message">Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.</div>';
         }
      }
      ?>


      <!--------------Navigation-------------->
      <header>
         <nav class="navbar">
            <div class="container">
               <div class="nav-brand">
                  <img src="img/pastille-azimut.png" id="nav-btn" alt="azimut productions">
                  <a class="nav-toggler" type="button" data-toggle="collapse"></a>
               </div>
               </a>
               <div class="navbar-links"> 
                  <a class="nav-link" href="./index.html">Accueil</a>
                  <a class="nav-link" href="./music-video.html">Music Video</a>
                  <a class="nav-link" href="./brand-commercials.html">Brand & Commercials</a>
                  <a class="nav-link" href="./feature-film.html">Feature Film</a>
                  <a class="nav-link" href="./team.html">Team</a>
                  <a class="nav-link" href="./contact.html">Contact</a>
               </div>
            </div>
         </nav>
      </header>
      <!--------------Banniere-------------->
      <section class="contact-banniere"></section>


      
      <!--------------Formulaire-------------->
      <section class="contact-section" id="contact-section">
         <div class="contact-container">
            <form method="post" name="form" id="form">
               <div class="form-group">
                  <label>Nom et Prénom</label>
                  <input type="text" name="name" id="name" class="form-control">
               </div>
               <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" name="email" id="email" class="form-control">
               </div>
               <div class="form-group">
                  <label class="" for="cemail">Votre message</label>
                  <textarea class="form-control" name="message" id="message" rows="9"></textarea>
               </div>
               <div class="form-btn-container">
                  <button type="submit" class="team-btn">Envoyer ma demande</button>
               </div>
            </form>
         </div>
         <div class="contact-container2">
            <p>Vous préférez les mails ou le téléphone ? Contacter Héloïse :<br>
               +33 6 72 85 01 76<br>
               <a href="mailto:contact@azimut-productions.com">contact@azimut-productions.com</a>
            </p>
         </div>
      </section>
      <!--------------Footer-------------->
      <footer>
         <div class="footer-social">
            <a href="https://www.instagram.com/azimut_prod/?hl=fr" target="_blank" title="instagram"><img id="insta" src="img/insta.png" title="instagram"></a>
            <a href="https://vimeo.com/azimutproductions/"  target="_blank" title="vimeo"><img id="vimeo" src="img/vimeo.png" title="vimeo" ></a>
         </div>
         <p class="footer-text">Mentions Légales @ Azimut Productions 2024 </p>
      </footer>
      <script type="module" src="/JS/contact.js"></script>
   </body>
</html>
