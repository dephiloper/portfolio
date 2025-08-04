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
    description: 'Haunted Cleaner is a relaxing light puzzle and narrative game about tidying up the rooms of the deceased and uncovering the stories left behind.',
    longDescription: 
      `A relaxing light puzzle and narrative game about tidying up and decorating the rooms of the deceased and unpacking the stories left behind! Play a psychic cleaner, meet diverse characters, explore different locations, and help lost spirits find their peace!
      </br>
      </br>
      <strong>HAUNTED CLEANER</strong> is the first standalone indie game project that I'm co-designing together with my work partner. The project got funded by the <a href="https://www.linkedin.com/posts/pboensch_new-media-f%C3%B6rderung-38-mio-euro-f%C3%BCr-25-activity-7353700190555365376-vkXz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmCikQB2fIQnGrDF-xYu8m6THjV7BGLlOw" target="_blank" rel="noopener noreferrer">Medienboard Berlin Brandenburg</a>.`,
    role: 'Lead Game Design - Co-Design, Technical Design',
    websiteLink: 'https://headkino.com',
  },
  {
    id: 2,
    title: 'Hexa Stack',
    year: '2024',
    company: 'SOFTGAMES Mobile Entertainment Services GmbH',
    image: 'hexa.webp',
    video: 'stack.webm',
    type: 'commercial',
    description: 'This is a vibrant hypercasual puzzle game where players match colored hexagons on a limited grid.',
    longDescription: 
      `Hexa Stack is a challenging and relaxing puzzle game with hexagon tiles, requiring strategy and logical thinking to match, sort, and stack. The game features boosters that aid the player as well as blocking tiles that make it harder to finish a level.
      </br>
      </br>
      While working on Hexa Stack I <strong>implemented gameplay</strong> for several in-game boosters and blockers, worked on the <strong>UI</strong> and created the <strong>logic for the store</strong>.`,
    role: 'Gameplay, UI, Animations, Game Economy - Programming',
    projectLink: 'https://www.facebook.com/gaming/play/408305982143225/?source=fb_gg_url&ext=1754401269&hash=AeTu8bnZfhO8GkqAepo',
    websiteLink: 'https://www.facebook.com/profile.php?id=61559724179331'
  },
  {
    id: 3,
    title: 'Solitaire Home Story',
    year: '2022',
    company: 'SOFTGAMES Mobile Entertainment Services GmbH',
    image: 'soho.webp',
    video: 'soho.webm',
    type: 'commercial',
    description: 'A multiplatform casual game blending Solitaire card mechanics with a narrative layer and creative home renovation tasks.',
    longDescription: 
      `<strong>Solitaire Home Story</strong> is a casual Solitaire card game with an added narrative layer about renovating an old house. It features several different characters, multiple decoration options, events, tournaments and leaderboards.
      </br>
      </br>
      As part of the game's production I was focusing on programming <strong>gameplay features</strong>, developing a standalone <strong>level editor</strong>, setting up in-game <strong>animations</strong>, <strong>LiveOps</strong> as well as creating visual effects using <strong>shaders</strong>.`,
    role: 'Gameplay, Tooling, LiveOps, UI, Animations - Technical Art & Programming',
    projectLink: 'https://www.facebook.com/gaming/play/360340958508346/?source=fb_gg_url&ext=1754401661&hash=AeT34tnLkbBJ73zGd7w',
    websiteLink: 'https://www.facebook.com/solitairehomestoryhub'
  },
  {
    id: 4,
    title: 'Gravity Warrior',
    year: '2021',
    company: 'Semester Project - University of Applied Sciences Berlin',
    image: 'gravity.webp',
    video: 'gravity.webm',
    type: 'private',
    description: 'In this 2D shooter players need to defeat aliens, defend their mother planet and level up with nice perks that can be unlocked after each wave.',
    longDescription: 
      `In <strong>Gravity Warrior</strong> you have the task to defeat waves of aliens that approach your planet. Their goal is to destroy the satellite on the planet that sends out signals. Try to stay alive, shoot aliens while keeping your satellite up and running!
      </br>
      </br>
      The game was developed during a master's semester project (independent coursework) at my university where the focus was on learning the full process of designing and developing a game. This involved creating <strong>game design documents</strong>, determining the fantasy, aesthetics and the mechanics of the game.`,
    role: 'Game Design, 2D Game Art and Programming',
    githubLink: 'https://github.com/dephiloper/game-and-interaction-design'
  },
  // {
  //   id: 5,
  //   title: 'Magic Dungeon',
  //   year: '2020',
  //   company: 'Nordic Game Jam (remotely)',
  //   image: 'MD_gameplay_01.webp',
  //   video: 'dungeon.webm',
  //   type: 'private',
  //   description: 'You play Magic everyday - because it\'s your everyday\'s magic! Magic Dungeon is a 2D dungeon crawler, deck builder game with a special twist.',
  //   longDescription: 'Created during Nordic Game Jam 2020, Magic Dungeon reimagines the dungeon crawler genre by integrating collectible card game mechanics with real-time exploration. The "special twist" revolves around using everyday magic - spells based on mundane activities like cooking, cleaning, or reading. Players explore procedurally generated dungeons while building their deck from discovered spell cards. Combat combines real-time movement with strategic card play, requiring players to position themselves while managing their hand and mana resources. The jam theme "Ways of the Heart" influenced the emotional magic system where spells are powered by different emotions. Despite the 48-hour time constraint, the game features complete dungeon generation, 40+ unique spell cards, enemy AI, and a progression system. The project showcases rapid prototyping skills, creative game design under pressure, and effective remote collaboration during early pandemic conditions.',
  //   role: 'Game Design, 2D Game Art and Programming',
  //   projectLink: 'https://boeshizzle.itch.io/magic-dungeon',
  //   githubLink: 'https://github.com/panic-fennecs/nordicgj20'
  // },
  {
    id: 6,
    title: 'Sheep\'s Best Friend',
    year: '2020',
    company: 'GMTK Game Jam',
    image: 'SBF_intro.webp',
    video: 'sheep.webm',
    type: 'private',
    description: 'Show courage and cleverness by accepting the responsibility of a herding dog and leading your herd of sheep past dangerous forest tracks, over obstacles until you reach the new paddock.',
    longDescription: 
      `Show courage and cleverness by accepting the responsibility of a herding dog and leading your herd of sheep past dangerous forest tracks, over obstacles until you reach the new paddock. Can you find enough calmness and endurance to face this challenge? Take a deep breath and start your journey as <strong>"Sheep's Best Friend"</strong>.
      </br>
      </br>
      <strong>Sheep's Best Friend</strong> was developed within a weekend for the GMTK Game Jam and was my first 3D game jam project. All 3D models have been created by me and the team using <strong>Blender</strong>.`,
    role: 'Game Design, 3D Game Art and Programming',
    projectLink: 'https://boeshizzle.itch.io/sheeps-best-friend',
    githubLink: 'https://github.com/panic-fennecs/ideal-garbanzo'
  },
  {
    id: 7,
    title: 'Stuck in a Loop',
    year: '2019',
    company: 'Nordic Game Jam',
    image: 'SiaL_screen_03.webp',
    video: 'stuck.webm',
    type: 'private',
    description: 'Time for some 2 player, local coop, rhythm game fun? Stuck in a Loop is a game about coordination, synchronization and stick figures. What do you want more?',
    longDescription: 
    `<strong>Stuck in a Loop</strong> is a cooperative rhythm game designed specifically for local multiplayer experiences. Each player controls a stick figure who must synchronize their movements to navigate through daily recurring events. The goal of the game is that both stick figures have individually perfect days and try to find each other on the final stage of the game. 
    </br>
    </br>
    For this game jam we (friends and I) went to Denmark to join the <strong>Nordic Game Jam</strong> in person, which was a crazy journey and a lot of fun!`,
    role: 'Game Design, 2D Game Art and Programming',
    projectLink: 'https://aloc.itch.io/stuck-in-a-loop',
    githubLink: 'https://github.com/panic-fennecs/nordic-game-jam01'
  },
    {
    id: 8,
    title: 'A Point in Time',
    year: '2019',
    company: 'Mini Jam 23: Time',
    image: 'APiT_banner.webp',
    video: 'apit.webm',
    type: 'private',
    description: 'A Point in Time is a simple and cute 2D story adventure where you have to encounter the misery of altering time.',
    longDescription: 
      `A Point in Time is a simple and cute 2D story adventure where you have to encounter the misery of altering time.
      </br>
      </br>
      This game jam project followed the jam's theme <i>time</i> and tried to incorporate time traveling into its mechanics. The goal for the player is to jump between present and past and solve small riddles to progress in the story. One requirement of the jam was to only <strong>use a limited color palette of 4 colors</strong>.`,
    role: 'Game Design, 2D Art and Programming',
    projectLink: 'https://boeshizzle.itch.io/a-point-in-time',
    githubLink: 'https://github.com/panic-fennecs/a-point-in-time'
  },
  {
    id: 9,
    title: 'Tributes of Cronos',
    year: '2018',
    company: 'Ludum Dare 43',
    image: 'ToC_screenshot_01.webp',
    video: 'toc.webm',
    type: 'private',
    description: 'A 2D platformer that requires dashing through opponents, jumping over spikes and dodging attacks of enemies all within the setting of a demonic world.',
    longDescription: 
      `<strong>Tributes of Cronos</strong> is a 2D platformer that requires dashing through opponents, jumping over spikes and dodging attacks of enemies all within the setting of a demonic world.
      </br>
      </br>
      The game was developed using <strong>Godot 3.1</strong> and was the first game jam project created with the engine. Because we were inexperienced with the engine and level design in general, it took us quite some time to figure out a proper setup for the jump and run. If a player wants to save progress, the player character needs to grab souls of fallen demons and sacrifice them on an altar.
      `,
     role: 'Game Design and Programming',
    projectLink: 'https://boeshizzle.itch.io/ldjam43',
    githubLink: 'https://github.com/panic-fennecs/ld_jam'
  },
  {
    id: 10,
    title: 'Funfair Fight',
    year: '2018',
    company: 'BeansJam Mobile',
    image: 'FFF_gameplay.webp',
    video: 'fff.webm',
    type: 'private',
    description: 'Forget all about these lame Rock Paper Scissors games and get your hands on your phone. There are five ways to kill your dearest with iconic funfair attractions. Try to read your opponent\'s mind and outplay his/her attacks with your own evil moves! Easy as DEAD!',
    longDescription: 
    `Forget all about these lame Rock Paper Scissors games and get your hands on your phone. There are five ways to kill your dearest with iconic <strong>funfair attractions</strong>. Try to read your opponent's mind and outplay his/her attacks with your own evil moves! Easy as DEAD!
    </br>
    </br>
    This jam game was developed for android using <strong>Unity</strong>. The main problem during development was that the game was heavy on setting up different animations for each of the five pickable fair attractions.`,
    role: 'Game Design and Programming',
    projectLink: 'https://boeshizzle.itch.io/funfairfight',
    githubLink: 'https://github.com/panic-fennecs/beansjam_mobile'
  },
  {
    id: 11,
    title: 'Marching Cubes',
    year: '2023',
    company: 'Semester Project - Norwegian University of Science and Technology',
    image: 'marching.webp',
    video: 'lava.webm',
    type: 'technical-art',
    description: 'Technical art semester project at the Norwegian University of Science and Technology using the Marching Cubes algorithm implemented in C++ and OpenGL to mimic the visual representation of a lava lamp or generated caves.',
    longDescription: 
    `
    This technical art semester project was created at the Norwegian University of Science and Technology using the <strong>marching cubes algorithm</strong> implemented in <strong>C++ and OpenGL</strong> to mimic the visual representation of a lava lamp or generated caves.
    </br>
    </br>
    I studied at the NTNU in Norway for an exchange semester. Even though the course was focusing on graphics programming (<a href="https://www.idi.ntnu.no/grupper/vis/home/teaching/" target="_blank" rel="noopener noreferrer">TDT4230 - Graphics and Visualization</a>) the semester projects could also focus on technical art.
    `,
    role: 'Technical Art - Mesh generation, noise algorithms',
    websiteLink: 'https://youtu.be/8advCaSdfJs?si=Sx1Nuy3cTP7-SsgD&t=58',
    githubLink: 'https://github.com/dephiloper/TDT4230-Assignment-1',
  },
  {
    id: 12,
    title: 'Wave Function Collapse',
    year: '2023',
    company: 'Research Project - University of Applied Sciences Berlin',
    image: 'wfc.webp',
    video: 'wfc.webm',
    type: 'technical-art',
    description: 'Semester project focusing on technical art at the University of Applied Sciences Berlin using the Wave Function Collapse algorithm implemented using Three.js and TypeScript with the idea to represent a 3 dimensional maze-like structure.',
    longDescription: 
      `My first independent coursework semester project focusing on technical art at the University of Applied Sciences Berlin using the <a href="https://github.com/mxgmn/WaveFunctionCollapse" target="_blank" rel="noopener noreferrer">Wave Function Collapse</a> algorithm implemented using <strong>Three.js and TypeScript</strong> with the idea to represent a 3 dimensional maze-like structure.
      </br>
      </br>
      The goal was to implement a structure based on chaos and visualize it on a website. I decided to allow users to configure maze and background color and added options for <strong>auto rotation</strong> and <strong>animating building the cubical maze incrementally</strong>.`,
    
      role: 'Technical Art - Algorithm tuning, visualization tools',
    websiteLink: 'https://tubes.boens.ch',
    githubLink: 'https://github.com/dephiloper/wfc-tubes'
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