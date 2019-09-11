import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'
import Typography from '@material-ui/core/Typography'
import './styles.css'

function Page(props) {
    const {
        results,
        goTo,
    } = props

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />
            <div className="results-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There aren't results
                </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media item-image"
                                        image={item.imageFileName}
                                        title={item.name}

                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <h3>Price: {item.price}</h3>
                                        <Typography component="p">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                }

            </div>

        </Fragment>
    );

}
export default Page;