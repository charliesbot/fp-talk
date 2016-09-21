import React from "react";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  OrderedList,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";



export const KickOffSlide = {
  notes: '',
  //bgImage: images.dna.replace("/", ""),
  bgColor: 'secondary',
  textColor: 'primary',
  bgDarken: 0.5,
  slideContent: () =>
    <div>
      <Heading size={1} textColor="white" caps fit>
        ReactJS, Redux and ... Ducks.
      </Heading>
      <Text bold caps textColor="tertiary" fit>
        Summit 2016
      </Text>
      <Text textColor="lightgreen" textSize={55}>
        Frankfurt 04.03.2016
      </Text>
    </div>
};

export const AboutMe = {
  notes: '',
  slideContent: () =>
    <div>
      <Heading size={1} caps textColor="secondary" fit>
        Charlie L
      </Heading>
      <Appear>
        <Text bold caps textColor="tertiary" fit>
          Code Monkey
        </Text>
      </Appear>

      <Appear>
        <Text bold textColor="#F8DC3D" fit>
          <span style={{color:'#EB2D2F'}}>Java</span>
          <span style={{color:'black'}}>, J</span>ava
          <span style={{color:'black'}}>S</span>cript
          <span style={{color:'black'}}> and ... all around it : )</span>
        </Text>
      </Appear>
    </div>
}

export const Agenda = {
  notes: '',
  transition: ["fade"],
  slideContent: () =>
    <div>
      <Heading size={2} caps textColor="tertiary">
        Agenda
      </Heading>
      <OrderedList>
        <ListItem>Microservices vs. UI</ListItem>
        <ListItem>Why React?</ListItem>
        <ListItem>Redux</ListItem>
        <ListItem>Static Assets</ListItem>
        <ListItem>DevTools</ListItem>
        <ListItem>Server Side Rendering</ListItem>
        <ListItem>Live Demo</ListItem>
      </OrderedList>
    </div>
}