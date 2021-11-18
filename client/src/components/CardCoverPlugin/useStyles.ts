import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modalBox: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: '24px',
    padding: '4rem',
  },
  imageDropBox: {
    height: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#d3d3d3',
    marginTop: '8px',
    marginBottom: '16px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imageDropBoxUploaded: {
    height: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#d3d3d3',
    marginTop: '8px',
    marginBottom: '16px',
    border: '2px solid green',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  uploadImage: {
    height: '2rem',
    width: '2rem',
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'black',
    fontSize: '11px',
  },
});

export default useStyles;