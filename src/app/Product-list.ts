import { IProduct } from './products/product';


export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    catalogId: 'p0001',
    name: 'White Cube',
    price: 100,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'WhiteCube.png',
    details: 'In geometry, a cube[1] is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex. The cube is the only regular hexahedron and is one of the five Platonic solids. <br>' +
     'It has 6 faces, 12 edges, and 8 vertices. The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations. <br>' +
     'The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations. <br>' +
     'The cube is dual to the octahedron. It has cubical or octahedral symmetry. The cube is the only convex polyhedron whose faces are all squares. <br>'
  },
  {
    id: 2,
    catalogId: 'p0002',
    name: 'Golden Cylinder',
    price: 190,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'goldenCylinder.png',
    details: 'A cylinder (from Greek κύλινδρος – kulindros, "roller", "tumbler"[1]) has traditionally been a three-dimensional solid, one of the most basic of curvilinear geometric shapes. It is the idealized version of a solid physical tin can having lids on top and bottom. <br>' +
    'This traditional view is still used in elementary treatments of geometry, but the advanced mathematical viewpoint has shifted to the infinite curvilinear surface and this is how a cylinder is now defined in various modern branches of geometry and topology. <br>' +
    'The shift in the basic meaning (solid versus surface) has created some ambiguity with terminology. It is generally hoped that context makes the meaning clear. Both points of view are typically presented and distinguished by referring to solid cylinders and cylindrical surfaces, but in the literature the unadorned term cylinder could refer to either of these or to an even more specialized object, the right circular cylinder. <br>'
  },
  {
    id: 3,
    catalogId: 'p0002',
    name: 'Red Ball',
    price: 248,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'redBall.png',
    details: 'A ball is a round object (usually spherical, but can sometimes be ovoid)[1] with various uses. It is used in ball games, where the play of the game follows the state of the ball as it is hit, kicked or thrown by players. Balls can also be used for simpler activities, such as catch or juggling. <br>' +
    ' Balls made from hard-wearing materials are used in engineering applications to provide very low friction bearings, known as ball bearings. Black-powder weapons use stone and metal balls as projectiles. Although many types of balls are today made from rubber, this form was unknown <br>' +
    'outside the Americas until after the voyages of Columbus. The Spanish were the first Europeans to see the bouncing rubber balls (although solid and not inflated) which were employed most notably in the Mesoamerican ballgame. Balls used in various sports in other parts of the world <br>' +
    'prior to Columbus were made from other materials such as animal bladders or skins, stuffed with various materials. As balls are one of the most familiar spherical objects to humans, the word "ball" may refer to or describe spherical or near-spherical objects. <br>' +
    '[Ball] is used metaphorically sometimes to denote something spherical or spheroid, e.g., armadillos and human beings curl up into a ball, we make a ball with our fist. f these or to an even more specialized object, the right circular cylinder.'
  },
  {
    id: 4,
    catalogId: 'p0003',
    name: 'Blue Box',
    price: 120,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'blueBox.png',
    details: 'Box (plural: boxes) describes a variety of containers and receptacles for permanent use as storage, or for temporary use, often for transporting contents. <br>' +
    ' Boxes may be made of durable materials such as wood or metal, or of corrugated fiberboard, paperboard, or other non-durable materials. The size may vary from very small (e.g., a matchbox) to the size of a large appliance. A corrugated <br>' +
    ' box is a very common shipping container. When no specific shape is described, a box of rectangular cross-section with all sides flat may be expected, but a box may have a horizontal cross section that is square, elongated, round or oval; sloped <br>' +
    ' or domed top surfaces, or vertical edges. They are not always made up of squares. <br>'
  },
  {
    id: 5,
    catalogId: 'p0004',
    name: 'Green Pyramid',
    price: 544,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'greenPyramid.png',
    details: 'A pyramid (from Greek: πυραμίς pyramís)[1][2] is a structure whose outer surfaces are triangular and converge to a single step at the top, making the shape roughly a pyramid in the geometric sense. The base of a pyramid can be trilateral, quadrilateral, or of any polygon shape. <br>' +
    'As such, a pyramid has at least three outer triangular surfaces (at least four faces including the base). The square pyramid, with a square base and four triangular outer surfaces, is a common version. <br>' +
    ' A pyramid&apos;s design, with the majority of the weight closer to the ground,[3] and with the pyramidion at the apex, means that less material higher up on the pyramid will be pushing down from above. This distribution of weight allowed early civilizations to create stable monumental structures. <br>' +
    ' Civilizations in many parts of the world have built pyramids. The largest pyramid by volume is the Great Pyramid of Cholula, in the Mexican state of Puebla. For thousands of years, the largest structures on Earth were pyramids—first the Red Pyramid in the Dashur Necropolis and then the Great Pyramid of Khufu, both in Egypt—the latter is the only one of the Seven Wonders of the Ancient World still remaining. <br>'
  },
  {
    id: 6,
    catalogId: 'p0005',
    name: 'Silver Cone',
    price: 165,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'SilverCone.png',
    details: 'A cone is a three-dimensional geometric shape that tapers smoothly from a flat base (frequently, though not necessarily, circular) to a point called the apex or vertex. A cone is formed by a set of line segments, half-lines, or lines connecting a common point, the apex, <br>' +
    'to all of the points on a base that is in a plane that does not contain the apex. Depending on the author, the base may be restricted to be a circle, any one-dimensional quadratic form in the plane, any closed one-dimensional figure, or any of the above plus all the enclosed points. <br>' +
    'If the enclosed points are included in the base, the cone is a solid object; otherwise it is a two-dimensional object in three-dimensional space. In the case of a solid object, the boundary formed by these lines or partial lines is called the lateral surface; if the lateral surface is unbounded, it is a conical surface. <br>' +
    'In the case of line segments, the cone does not extend beyond the base, while in the case of half-lines, it extends infinitely far. In the case of lines, the cone extends infinitely far in both directions from the apex, in which case it is sometimes called a double cone. <br>' + 
    'Either half of a double cone on one side of the apex is called a nappe.  of Puebla. For thousands of years, the largest structures on Earth were pyramids—first the Red Pyramid in the Dashur Necropolis and then the Great Pyramid of Khufu, ' + 
    'both in Egypt—the latter is the only one of the Seven Wonders of the Ancient World still remaining. '
  },
  {
    id: 7,
    catalogId: 'p0006',
    name: 'Black Pipe...',
    price: 2400,
    status: 'not-active',
    experationDate: new Date('01/01/25'),
    img: '/assets/' + 'blackPipe.png',
    details: 'A pipe is a tubular section or hollow cylinder, usually but not necessarily of circular cross-section, used mainly to convey substances which can flow — liquids and gases (fluids), slurries, powders and masses of small solids. It can also be used for structural applications; <br>' + 
    ' hollow pipe is far stiffer per unit weight than solid members. In common usage the words pipe and tube are usually interchangeable, but in industry and engineering, the terms are uniquely defined. Depending on the applicable standard to which it is manufactured, <br>' +
    'pipe is generally specified by a nominal diameter with a constant outside diameter (OD) and a schedule that defines the thickness. Tube is most often specified by the OD and wall thickness, but may be specified by any two of OD, inside diameter (ID), <br>' +
    'and wall thickness. Pipe is generally manufactured to one of several international and national industrial standards.[1] While similar standards exist for specific industry application tubing, tube is often made to custom sizes and a broader range of diameters and tolerances. <br>' +
    'Many industrial and government standards exist for the production of pipe and tubing. The term "tube" is also commonly applied to non-cylindrical sections, i.e., square or rectangular tubing. In general, "pipe" is the more common term in most of the world, whereas "tube" is more widely used in the United States. <br>'
  },
];
