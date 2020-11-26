import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes_model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Laika', bio: 'Laika was a Soviet space dog who became one of the first animals in space, and the first animal to orbit the Earth. Laika, a stray mongrel from the streets of Moscow, was selected to be the occupant of the Soviet spacecraft Sputnik 2 that was launched into outer space on 3 November 1957.' },
      { id: 2, name: 'Yuri Gagarin', bio: 'Yuri Alekseyevich Gagarin was a Soviet Air Forces pilot and cosmonaut who became the first human to journey into outer space, achieving a major milestone in the Space Race; his capsule, Vostok 1, completed one orbit of Earth on 12 April 1961.' },
      { id: 3, name: 'Alan Shepard', bio: 'Rear Admiral Alan Bartlett Shepard Jr. was an American astronaut, naval aviator, test pilot, and businessman. In 1961, he became the first American to travel into space, and in 1971, he walked on the Moon.'},
      { id: 4, name: 'John Glenn', bio: 'John Herschel Glenn Jr. was a United States Marine Corps aviator, engineer, astronaut, businessman and politician. He was the third person and the first American to orbit the Earth, circling it three times in 1962.' },
      { id: 5, name: 'Valentina', bio: 'Valentina Vladimirovna Tereshkova is a member of the Russian State Duma, engineer, and former cosmonaut. She is the first and youngest woman to have flown in space with a solo mission on the Vostok 6 on 16 June 1963.' },
      { id: 6, name: 'Alexei Leonov', bio: 'Alexei Arkhipovich Leonov was a Soviet and Russian cosmonaut, Air Force major general, writer, and artist. On 18 March 1965, he became the first person to conduct a spacewalk, exiting the capsule during the Voskhod 2 mission for 12 minutes and 9 seconds.' },
      { id: 7, name: 'Ed White', bio: 'On 3 June 1965, during the Gemini 4 mission, Ed White became the first American to take a spacewalk. White his spacewalk lasted over 20 minutes.' },
      { id: 8, name: 'Neil Armstrong', bio: 'The first person to set foot on the Moon was American Neil Armstrong on 20 July 1969. Upon exiting his spacecraft, the lunar module, Armstrong said the now famous words, "That\'s one small step for man, one giant leap for mankind."' },
      { id: 9, name: 'Sally Ride', bio: 'On 18 June 1983, Sally Ride became the first American woman to venture into space aboard the space shuttle Challenger. Ride turned 32 a month before going to space, making her also the youngest American ever to do so.' },
      { id: 10, name: 'Eileen Collins', bio: 'In 1995, Eileen Collins became the first woman to pilot a space shuttle, the Discovery. That was NASA s first mission to the Russian space station Mir. In 1999, Collins took the helm of the Columbia, becoming the first female space shuttle commander. Collins retired from the air force in 2005, having spent over 872 hours in space – that is more than 36 days.' },
      { id: 11, name: 'Mae Jemison', bio: 'The first African American woman in space was Mae Jemison. She lifted off in the space shuttle Endeavor on 12 September 1992.' },
      { id: 12, name: 'Dennis Tito', bio: 'In 2001, California billionaire businessman Dennis Tito became the first tourist, or paying passenger, to go into space. His ticket cost $20 million. Tito went up about the Russian Soyuz supply mission to the International Space Station. He spent eight days on board the ISS before returning to Earth.' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
