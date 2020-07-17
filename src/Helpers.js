import * as THREE from 'three';

export const helpers = (scene) => {
    const axis = new THREE.AxisHelper(20);
    scene.add(axis);
    const radius = 20;    const radials = 20;    const circles = 20;    const divisions = 64;
    const gridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
    scene.add(gridHelper);
};


export const dataArray = {
   'sun' : '<h2> Sun </h2> <p> The central star of the solar system, around which the Earth revolves, other planets of this system, dwarf planets and small bodies of the solar system. </p> <p> The sun formed about 4.567 billion years ago. The sun is the brightest object in the sky and the main source of energy reaching Earth. Built mainly of hydrogen and helium. Pressure 250 billion atmospheres. Surface temperature around 6000 K. </p> <p> Diameter approx. 1.4 million km. It is covered with dark spots. </p> ' ,

    ' Mercury ' : '<h2> Mercury </h2> <p> The first Solar System planet according to distance from the Sun. It is an internal rocky planet, also called the planet "Ice and fire". There are 2 sunrises and sunsets per day. Circulation around the sun 88 days. Rotation around its axis 59 days. </p> <p> Diameter 4 900 km. Distance from the Sun 58 million km. During the day the temperature warms up to 430 * C and at night it drops to -170 * C. It has no atmosphere. There is no moon. </p> ' ,

    'venus' : ' <h2> Venus </h2> <p> Second Solar System planet according to distance from the Sun. It is also known as Jutrzenka and is the brightest celestial body in the sky after the Sun and Moon. It is an inner planet, rocky. </p> <p> Earth-like mass, size and shape. Circulation around the sun 225 days. Rotation around its axis 243 days. Diameter 12,100 km. Distance from the Sun 108 million km. Temp. Area 475C. The atmosphere contains vapors and drops of sulfuric acid. There is no moon. </p> ' ,

    'earth' : '<h2> Earth </h2> <p> Third Solar System planet according to distance from the Sun. It is the largest of all inner planets. The surface is mainly oceans. Circulation around the Sun 365 days. Rotation around its axis 24 h. </p> <p> The distance from the Sun is one astronomical unit 150 million km. Temp. Area 14 * C. The right atmosphere, consisting of 78% nitrogen, 21% oxygen and 1% other gases. It has 1 natural satellite, the Moon. </p> ' ,

    'mars' : ' <h2> Mars </h2> <p> The fourth solar system planet according to distance from the Sun. Rocky planet, inner. There is water and iron, ice caps, seasons, and a complex atmosphere. Circulation around the sun 2 years. </p> <p> Rotation around its axis 24 hours. Diameter 6 800 km. Distance from the Sun 228 million km. Temp. area. from –93 to 27 * C. It has 2 moons. </p> ' ,

    'jupiter' : '<h2> Jupiter </h2> <p> Fifth according to the distance from the sun to the planet of the solar system. It is also the largest and heaviest planet. It is a gas planet, external. It has a very low density. </p> <p> The orbit around the sun is 12 years. Rotation around its own axis 10 h. Diameter 143,000 km. Distance from the Sun 778 million km. Temp. area. -150 ° C. It has 32 moons </p> ' ,

    'saturn' : '<h2> Saturn </h2> <p> Sixth solar system planet according to distance from the sun. It is a gas planet, external. The density of matter of which it is made is lower than the density of water. </p> <p> A mass 75 times the mass of Earth. Circulation around the sun 30 years. Rotation around its own axis 10 h. Diameter 121,000 km. </p> <p> Distance from the Sun 1,430 million km. Temp. area. -180 ° C. It has 3 rings. 28 moons, 2 of which have a proper atmosphere, and the largest Titan has a dense atmosphere. </p> ' ,

    'uranus' : ' <h2> Uranus </h2> <p> The seventh solar system planet according to the distance from the Sun. It is a gas planet, external. It was discovered in 1871. Wrapped in methane. Circulation around the sun 84 years. </p> <p> Rotation around its axis - 17 hours. Diameter 52 400 km. Distance from the Sun 2,900 million km. Temp. area. from –271 * C to –213 * C. It has rings and 15 moons (Miranda). </p> ' ,
 'neptune' : '<h2> Neptune </h2> <p> Eighth solar system planet according to distance from the sun. It was discovered in 1846. It is a gas planet, external. Blue atmosphere from the methane contained in it. The orbital cycle - 165 years. Circulation around its own axis 18 h. Diameter 50,000 km. Distance from the sun 4,500 million km. Temp. area. -210 ° C. It has 4 very rare and narrow rings, as well as 14 moons. </p> ' ,

}
