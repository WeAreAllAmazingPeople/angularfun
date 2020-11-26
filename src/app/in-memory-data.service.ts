import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes_model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Claudius Ptolemy', bio: 'Claudius Ptolemy (AD 90-168) lived in Egypt but possessed Greek ancestry. As a mathematician, geographer and astronomer, he authored several scientific texts which had considerable impact on Western intellectual thought.' },
      { id: 2, name: 'Nicolaus Copernicus', bio: 'Nicolaus Copernicus (1473-1543) shattered the long-held notion that the Earth was the center of the solar system, proposing a heliocentric (sun-centered) model instead.' },
      { id: 3, name: 'Isaac Newton', bio: 'saac Newton (1642–1727) often commands respect as the most influential figure in all of science. He invented calculus, as well as investigating optics, mechanics, experimental chemistry, alchemy, and theology. His creation of the three universal laws of motion plus the invention of the theory of universal gravity permanently altered the field of science.'},
      { id: 4, name: 'Giovanni Cassini', bio: 'Giovanni Cassini (1625-1712) was born in Perinaldo, Republic of Genoa (now Italy). In 1672, Cassini and colleague Jean Richer used the parallax method to determine the distance of Mars from Earth, permitting the first estimations of the dimensions of the solar system. Using a method outlined by Galileo, Cassini was also the first to make successful measurements of longitude. Cassini made the first observations of four of Saturn\'s moons: Iapetus, Rhea, Tethys and Dione. In addition, he discovered the Cassini Division in the rings of Saturn in 1675. His name lives on today in the Cassini orbiter which has studied Saturn and its satellites since 2004. ' },
      { id: 5, name: 'Albert Einstein ', bio: 'Albert Einstein (1879–1955) of Germany stands as the preeminent physicist of the twentieth century. Though he did not practice observational astronomy as in peering through telescopes, his theories of relativity extended so far — to the entire universe, in fact — they forever changed astronomy.' },
      { id: 6, name: 'Laika', bio: 'Laika was a Soviet space dog who became one of the first animals in space, and the first animal to orbit the Earth. Laika, a stray mongrel from the streets of Moscow, was selected to be the occupant of the Soviet spacecraft Sputnik 2 that was launched into outer space on 3 November 1957.'},
      { id: 7, name: 'Yuri Gagarin', bio: 'Yuri Alekseyevich Gagarin was a Soviet Air Forces pilot and cosmonaut who became the first human to journey into outer space, achieving a major milestone in the Space Race; his capsule, Vostok 1, completed one orbit of Earth on 12 April 1961.' },
      { id: 8, name: 'Valentina Tereshkova', bio: 'Valentina Vladimirovna Tereshkova is a member of the Russian State Duma, engineer, and former cosmonaut. She is the first and youngest woman to have flown in space with a solo mission on the Vostok 6 on 16 June 1963.' },
      { id: 9, name: 'Neil Armstrong', bio: 'The first person to set foot on the Moon was American Neil Armstrong on 20 July 1969. Upon exiting his spacecraft, the lunar module, Armstrong said the now famous words, "That is one small step for man, one giant leap for mankind."' },
      { id: 10, name: 'John Glenn', bio: 'In 1998, 36 years after being the first American to orbit the Earth, John Glenn went back into space aboard the space shuttle Discovery. At 77 years of age, Glenn was the oldest person to venture into space.' },
      { id: 11, name: 'Dennis tito', bio: 'In 2001, California billionaire businessman Dennis Tito became the first tourist, or paying passenger, to go into space. His ticket cost $20 million. Tito went up about the Russian Soyuz supply mission to the International Space Station. He spent eight days on board the ISS before returning to Earth.' },
      { id: 12, name: 'Peggy Whitson', bio: 'In 2008, the first woman to command the International Space Station was Dr. Peggy Whitson, who also holds the American record for cumulative days in space – over 376 days.' }
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
