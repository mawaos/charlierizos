import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Card, CardContent, CardCover, Typography } from '@mui/joy';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Typography margin={1} variant='soft' color='warning' level='h1'>Te amo tanto como tu amas a robe y al nuevo sencillo del cuarteto &lt;3</Typography>

        <Typography></Typography>
      </Box>
      <Box margin={1}>
      <Card color='warning' variant='soft'>
          <CardContent>
            <Typography level='h4'>Para: Charlie Rizos</Typography>
            <Typography level='h4'>De: Mikel</Typography>
          </CardContent>
        </Card>

        </Box>
        <Typography margin={1} variant='soft' color='warning' level='h1' textAlign={'justify'}>Esta carta es tan unica como tú</Typography>
        <Typography margin={1}>
          Holaaaa charliee, hago esta carta con mucha intencion, pues la verdad desde que te conocí, me he sentido muy
          feliz, porque la verdad, aunque no te conozca de cerca y a penas llevemos un par de dias, te admito que la verdad
          cuando hablo contigo siento como si te conociera de toda la vida JASJASJA, La verdad me hace demasiado feliz el
          hecho de compartir tanto en comun y en si q te guste robe y extremo (LA PRIMERA FAN Q CONOZCO); Bueno,
          he sentido mucha conexion y la verdad esta carta es una forma de expresar mi aprecio hacia ti, y tambien es para
          hacerte comprender que la verdad siempre estare pendiente de ti porque la verdad me importas muchisimo 
        </Typography>
        
        <Typography margin={1} marginTop={3}>
          La verdad, cada vez q recibo un mensaje tuyo siento q me gané el mundo y cada vez q veo algo sobre robe o extremo me
          acuerdo de ti, también cada vez que veo algo sobre cossplay o dibujo, pasa lo mismo, me acuerdo de ti y la verdad, soy
          fan de tus dibujos &lt;3
        </Typography>
        
        <center><Card variant="soft" color="warning" sx={{ minHeight: 300, minWidth: 300, height: 300, width: 300 }}>
              <CardCover>
                <img
                  src="https://i.imgur.com/zjxNkTI.jpeg"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }} // Ajustar estilo de la imagen
                />
              </CardCover>
              <CardContent>
                <Typography
                  level="h4"
                  textAlign={'justify'}
                  textColor="#34312D"
                  sx={{ fontWeight: 'lg', mt: { xs: 41, sm: 41} }}
                >
                  AMO AL LOREN DE MI LERMAN (ERES MI DIBUJANTE FAV)
                </Typography>
              </CardContent>
            </Card></center>
            <Typography marginX={1} marginBottom={1} marginTop={12} level='h1' color='warning' variant='soft'>La verdad, mi paisaje mas soñado esta en tus ojos &lt;3</Typography>
            <Typography marginX={1} marginBottom={1} marginTop={1} level='h2' color='danger' variant='soft'>
              Y ese paisaje es como una noche estrellada en la que la estrella mas brillante, eres tú 
            </Typography>
            <Typography margin={1}>te amo muchote (queria ponerle mas cosas a la carta pero queria dartela lo antes posible)</Typography>

    </> 
  ); 
}
export default App;
