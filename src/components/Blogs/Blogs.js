import React from 'react';

const Blogs = () => {
  return (
    <section className="container w-1/2 h-auto mx-auto py-4 px-4">
      <div>
        <h3 className="text-2xl font-semibold pt-10">
          Difference between authorization and authentication
        </h3>
        <p className="text-lg text-justify">
          Both Authentication and Authorization area unit utilized in respect of
          knowledge security that permits the safety on an automatic data
          system. Each area unit terribly crucial topics usually related to the
          online as key items of its service infrastructure. However, each the
          terms area unit terribly completely different with altogether
          different ideas. whereas it’s true that they’re usually employed in an
          equivalent context with an equivalent tool, they’re utterly distinct
          from one another. <br />
          In authentication process, the identity of users are checked for
          providing the access to the system. While in authorization process,
          person’s or user’s authorities are checked for accessing the
          resources. Authentication is done before the authorization process,
          whereas authorization process is done after the authentication
          process.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold pt-10">
          Why are you use firebase? What other options do you have to implement
          authentication?
        </h3>
        <p className="text-lg text-justify">
          We can use Firebase Authentication to allow users to sign in to our
          app using one or more sign-in methods, including email address and
          password sign-in, and federated identity providers such as Google
          Sign-in and Facebook Login. This tutorial gets you started with
          Firebase Authentication by showing you how to add email address and
          password sign-in to your app.
          <br />
          <br />
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold pt-10">
          What other services does firebase provide other than authentication
        </h3>
        <p className="text-lg text-justify">
          Most apps need to know the identity of a user. Knowing a user's
          identity allows an app to securely save user data in the cloud and
          provide the same personalized experience across all of the user's
          devices. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more. Firebase Authentication integrates tightly with
          other Firebase services, and it leverages industry standards like
          OAuth 2.0 and OpenID Connect, so it can be easily integrated with your
          custom backend.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
