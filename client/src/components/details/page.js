import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import Button from '@material-ui/core/Button';
import './styles.css';

function Page(props) {
    const {
        goTo,
        currentItem,
    } = props;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {currentItem ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {currentItem.name}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${currentItem.imageFileName})`,
                                }}
                            />
                            <h3>Price: {currentItem.price}€</h3>
                            <p><b>Manufacturer:</b> {currentItem.manufacturer}</p>
                            <p><b>Color:</b> {currentItem.color}</p>
                            <p><b>Screen:</b> {currentItem.screen}</p>
                            <p><b>Processor:</b> {currentItem.processor}</p>
                            <p><b>Ram:</b> {currentItem.ram}</p>
                            <Typography gutterBottom component="p" className="content">
                                <b>Description:</b> {currentItem.description}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Back
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );

}
export default Page;