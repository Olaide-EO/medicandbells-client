export default {
    palette: {
    primary: {
      light: '#1261A0',
      main: '#072F5F',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }

    
    
  },


  spreadStyle: {
    typography: {
      useNextVariants: true
    },
    form: {
          textAlign: 'center'
      },
      image: {
          margin: '20px auto 20px auto'
      },
      pageTitle: {
      margin:  '10px auto 20px auto'
      },
      textField: {
          margin:  '10px auto 20px auto'
      },
      button: {
          marginTop: 20,
          position: 'relative'
      }, 
      customError: {
          color: 'red',
          fontSize: '0.8rem',
          marginTop: 20
      },
  
      progress: {
          position: 'absolute'
      },
      invisibleSeparator: {
        border: 'none',
        margin: 4
    },
    visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20
    },
    paper: {
      padding: 20
  },
  profile: {
      '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
          }
      },
      '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
      },
      '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
              verticalAlign: 'middle'
          },
          '& a': {
              color: '#00bcd4'
          }
      },
      '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
      },
      '& svg.button': {
          '&:hover': {
              cursor: 'pointer'
          }
      }
  },
  buttons: {
      textAlign: 'center',
      '& a': {
          margin: '20px 10px'
      }
  }
  
  }
  
}