import React, { FC } from 'react';
import './styles.css';
import Navigation from '../../components/navigation';
import ProjectList, { Project } from '../../components/project_list';

const projects: Project[] = [
  {
    id: 1,
    title: 'Haunted Cleaner',
    year: 'tbd',
    company: 'HeadKino Games',
    image: 'haunted_cleaner.webp',
    type: 'commercial',
    description: 'A relaxing light puzzle and narrative game about tidying up and decorating the rooms of the deceased and unpacking the stories left behind! Play a psychic cleaner, meet diverse characters, explore different locations, and help lost spirits find their peace!',
    role: 'Lead Game Design & Programming',
  },
  {
    id: 2,
    title: 'Hexa Stack',
    year: '2024',
    company: 'SOFTGAMES Mobile Entertainment Services GmbH',
    image: 'hexa.webp',
    type: 'commercial',
    description: 'Vibrant puzzle game where players match colored hexagons on a limited grid.',
    role: 'Programming - Gameplay, UI, Animations, Game Economy',
  },
  {
    id: 3,
    title: 'Solitaire Home Story',
    year: '2022',
    company: 'SOFTGAMES Mobile Entertainment Services GmbH',
    image: 'soho.webp',
    type: 'commercial',
    description: 'A multiplatform casual game blending Solitaire card mechanics with an narrative layer and creative home renovation tasks.',
    role: 'Programming & Technical Art - Gameplay, Tooling, LiveOps, UI, Animations',
  },
  {
    id: 4,
    title: 'Gravity Warrior',
    year: '2021',
    company: 'University of Applied Sciences Berlin',
    image: 'gravity.webp',
    type: 'private',
    description: '2D platformer with gravity-switching mechanics.',
    role: 'Game Design, 2D Game Art and Programming',
  },
  {
    id: 5,
    title: 'Magic Dungeon',
    year: '2020',
    company: 'Nordic Game Jam (remotely)',
    image: 'MD_gameplay_01.webp',
    type: 'private',
    description: 'You play Magic everyday - because it\'s your everyday\'s magic! Magic Dungeon is a 2D dungeon crawler, deck builder game with a special twist.',
    role: 'Game Design, 2D Game Art and Programming',
  },
  {
    id: 6,
    title: 'Sheep\'s Best Friend',
    year: '2020',
    company: 'GMTK Game Jam',
    image: 'SBF_intro.webp',
    type: 'private',
    description: 'Show courage and cleverness by accepting the responsibility of a herding dog and leading your herd of sheep past dangerous forest tracks, over obstacles until you reach the new paddock. Can you find enough calmness and endurance to face this challenge? Take a deep breath and start your journey as \"Sheep\'s Best Friend\"',
    role: 'Game Design, 3D Game Art and Programming',
  },
  {
    id: 7,
    title: 'Stuck in a Loop',
    year: '2019',
    company: 'Nordic Game Jam',
    image: 'SiaL_screen_03.webp',
    type: 'private',
    description: 'Time for some 2 player, local coop, rythm game fun? Stuck in a Loop is a game about coordination, synchronisation and stick figures. What do you want more?',
    role: 'Game Design, 2D Game Art and Programming',
  },
  {
    id: 8,
    title: 'Tributes of Cronos',
    year: '2018',
    company: 'Ludum Dare 43',
    image: 'ToC_screenshot_01.webp',
    type: 'private',
    description: 'A 2d platformer that requires dashing through opponents, jumping over spikes and dodging attacks of enemies all within the setting of a demonic world.',
    role: 'Game Design and Programming',
  },
  {
    id: 9,
    title: 'Funfair Fight',
    year: '2018',
    company: 'BeansJam Mobile',
    image: 'FFF_gameplay.webp',
    type: 'private',
    description: 'Forget all about these lame Rock Paper Scissors Games and get your hands on your phone. There are five ways to kill your dearest with iconic Fun Fair attractions. Try to read your opponents mind and outplay his/her attacks with your own evil moves! Easy as DEAD!',
    role: 'Game Design and Programming',
  },
  {
    id: 10,
    title: 'A Point in Time',
    year: '2019',
    company: 'Mini Jam 23: Time',
    image: 'APiT_banner.webp',
    type: 'private',
    description: 'A Point in Time is a simple but cute story adventure where you have to encounter the missery of altering time.',
    role: 'Game Design, 2D Art and Programming',
  },
  {
    id: 11,
    title: 'Marching Cubes',
    year: '2023',
    company: 'Technical Demo',
    image: 'marching.webp',
    type: 'technical-art',
    description: 'Procedural terrain generation using marching cubes in Unity.',
    role: 'Technical Art - Mesh generation, noise algorithms',
  },
  {
    id: 12,
    title: 'Wave Function Collapse',
    year: '2023',
    company: 'Research Project',
    image: 'wfc.webp',
    type: 'technical-art',
    description: 'Tile-based procedural generation based on WFC algorithm.',
    role: 'Technical Art - Algorithm tuning, visualization tools',
  },
];

const Home: FC = () => {
  return (
    <>
      <Navigation />
      <ProjectList projects={projects} />
    </>
  );
};

export default Home;
