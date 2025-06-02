import { Box, Container, Typography } from '@mui/material';
import Navbar from '../common Components/navbar';
import Footer from '../common Components/footer';
import FlipCard from '../common Components/cards';
import Pyramids from "../assets/IMG-20250528-WA0002.jpg";
import Solar  from "../assets/IMG-20250528-WA0004.jpg";
import King  from "../assets/IMG-20250528-WA0009.jpg";
import Templet  from "../assets/IMG-20250528-WA0008.jpg";
import Abydos  from "../assets/IMG-20250528-WA0008.jpg";
import Wady  from "../assets/IMG-20250528-WA0006.jpg";
import Dier  from "../assets/IMG-20250528-WA0005.jpg";
import Hawara  from "../assets/IMG-20250528-WA0005.jpg";
import Phalie  from "../assets/IMG-20250528-WA0010.jpg";
import Abusimbil  from "../assets/IMG-20250528-WA0012.jpg";



const cityData = [
  {
    name: 'GIZA',
    cards: [
      {
        title: 'Enter the Pyramids',
        img: Pyramids,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
      {
        title: 'Visit Solar Boat Museum',
        img: Solar,
        desc: 'Visit Solar Boat Museum Why: See Khufu’s 4,600-year-old cedar ship, a stunning relic of afterlife voyages. Hours: 9 AM–4 PM;last entry 3:30 PM. Price: ~$5 (240 EGP).',
        note: 'Note: Advance booking is recommended.'
      },
    ],
  },
  {
    name: 'LUXOR',
    cards: [
      {
        title: 'Valley of the Kings',
        img: King,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
      {
        title: 'Karnak Temple Complex',
        img: Templet,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
    ],
  },
  {
    name: 'SOHAG',
    cards: [
      {
        title: 'Abydos Temple',
        img: Abydos,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
      {
        title: 'Osireion',
        img: Dier,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
    ],
  },
  {
    name: 'ASWAN',
    cards: [
      {
        title: 'Philae Temple',
        img: Phalie,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
      {
        title: 'Abu Simbel Temples',
        img: Abusimbil,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
    ],
  },
  {
    name: 'FAYOUM',
    cards: [
      {
        title: 'Wadi El Rayan',
        img: Wady,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
      {
        title: 'Hawara Pyramid',
        img:Hawara,
        desc: 'Why: Crawl through tight passages to the Great Pyramid’s King’s Chamber or explore Khafre/Menkaure’s smaller interiors.\nHours: 8 AM–4 PM (limited tickets). \nPrice: Great Pyramid ~$18 (900 EGP); Khafre/Menkaure ~$5.60 (280 EGP). ',
        note: 'Note:\nNot for claustrophobic.\nLimited tickets; arrive early or book a ticket.\nNo photos inside'
      },
    ],
  },
];

function OurTours() {
  return (
    <div>
      <Navbar />
      <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pb: 6 }}>
        <Container maxWidth="lg" sx={{ pt: 6, pb: 2 }}>
          <Typography variant="h6" align="center" sx={{ fontFamily: 'serif', mb: 2 }}>
            "These popular destinations have a lot to offer"
          </Typography>
          {cityData.map((city, idx) => (
            <Box key={city.name} sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  color: '#D4AF37',
                  letterSpacing: 2,
                  mb: 3,
                  mt: idx === 0 ? 2 : 6,
                  textShadow: '0 1px 2px #fff, 0 0 2px #fff',
                }}
              >
                {city.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: { xs: 10, sm: 14, md: 16 },
                }}
              >
                {city.cards.map((card) => (
                  <Box
                    key={card.title}
                    sx={{
                      flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 40%' },
                      maxWidth: 400,
                      minWidth: 260,
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      my: { xs: 4, sm: 6, md: 8 },
                    }}
                  >
                    <FlipCard
                      img={card.img}
                      title={card.title}
                      desc={card.desc}
                      note={card.note}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default OurTours;
