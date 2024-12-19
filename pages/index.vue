<template>
  <div>
    <Navbar :links="navbarLinks" :bg="navbarBg" :textColor="navbarTextColor" />
    <Hero :title="heroTitle" :subtitle="heroSubtitle" :image="heroImage" :textColor="heroTextColor" :bg="heroBg" />
    <Section :title="sectionTitle" :description="sectionDescription" :bg="sectionBg" :textColor="sectionTextColor" />
    <Form :fields="formFields" :buttonText="formButtonText" :buttonColor="formButtonColor" />
    <Footer :content="footerContent" :bg="footerBg" :textColor="footerTextColor" />
  </div>
</template>

<script setup>
import { useContent } from '@nuxt/content';
import Navbar from '~/components/Navbar.vue';
import Hero from '~/components/Hero.vue';
import Section from '~/components/Section.vue';
import Form from '~/components/Form.vue';
import Footer from '~/components/Footer.vue';

// Fetch content from the content folder
const navbar = await useContent('blocks/navbar.md').fetch();
const footer = await useContent('blocks/footer.md').fetch();
const hero = await useContent('blocks/hero.md').fetch();
const section = await useContent('blocks/section.md').fetch();
const form = await useContent('blocks/form.md').fetch();

// Map the content to be passed as props to components
const navbarLinks = navbar.links;
const navbarBg = navbar.background;
const navbarTextColor = navbar.textColor;

const heroTitle = hero.title;
const heroSubtitle = hero.subtitle;
const heroImage = hero.image;
const heroTextColor = hero.textColor;
const heroBg = hero.backgroundColor;

const sectionTitle = section.title;
const sectionDescription = section.description;
const sectionBg = section.backgroundColor;
const sectionTextColor = section.textColor;

const formFields = form.fields;
const formButtonText = form.buttonText;
const formButtonColor = form.buttonColor;

const footerContent = footer.content;
const footerBg = footer.background;
const footerTextColor = footer.textColor;
</script>
