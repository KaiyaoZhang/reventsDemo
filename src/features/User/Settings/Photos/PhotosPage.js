import React, {useState, useEffect, Fragment} from 'react';
import {Image, Segment, Header, Divider, Grid, Button, Card, Icon} from 'semantic-ui-react';
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';
import Firebase from '../../../auth/Firebase';
import 'firebase/storage'; 

const PhotosPage = ({user}) => {
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    }, [files])
    
    const handleImageUpload = () => {
        //console.log(storage);
        const upLoadTask = Firebase.storage().ref(`images/${image.name}`).put(image);
        upLoadTask.on('state_changed', 
        (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
        }, (err) => {
        //catches the errors
        console.log(err)
        }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        Firebase.storage().ref('images').child(image.name).getDownloadURL()
        .then(url => {
            setImage({...image, imgUrl: url})
            Firebase.updateProfile({
                photoURL: url
            }).then(() => {
                console.log('image changed!');
            })
            .catch(e => {
                console.log(e)
            })
            
            user.updateProfile({
                photoURL: url
            })
            .then(() => {
                console.log('image changed!');
            })
            .catch(e => {
                console.log(e)
            })

            
        })
        })
        handleCloseCrop();
    }

    const handleCloseCrop = () => {
        setFiles([]);
        setImage(null);
    }

    return (
        <Segment>
            <Header dividing size='large' content='Your Photos' />
            <Grid>
                <Grid.Row />
                <Grid.Column width={4}>
                    <Header color='teal' sub content='Step 1 - Add Photo'/>
                    <DropzoneInput setFiles={setFiles}/>
                </Grid.Column>
                <Grid.Column width={1} />
                <Grid.Column width={4}>
                    <Header sub color='teal' content='Step 2 - Resize image' />
                    {files.length > 0 &&
                    <CropperInput 
                        setImage={setImage} 
                        imagePreview={files[0].preview} 
                        imageName={files[0].name}
                    />}
                </Grid.Column>
                <Grid.Column width={1} />
                <Grid.Column width={4}>
                    <Header sub color='teal' content='Step 3 - Preview and Upload' />
                    {files.length > 0 && 
                        <Fragment>
                            <div
                                className='img-preview' 
                                src={files[0].preview} 
                                style={{minHeight: '200px', minWidth: '200px', overflow: 'hidden'}} 
                            />
                            <Button.Group>
                                <Button 
                                    style={{width: '100px'}}
                                    positive 
                                    icon='check'
                                    onClick={handleImageUpload} 
                                    />
                                <Button
                                    style={{width: '100px'}} 
                                    icon='close'
                                    onClick={handleCloseCrop} 
                                    />
                            </Button.Group>
                        </Fragment>
                    }
                </Grid.Column>

            </Grid>

            <Divider/>
            <Header sub color='teal' content='All Photos'/>

            <Card.Group itemsPerRow={5}>
                <Card>
                    <Image src={user.photoURL}/>
                    <Button positive>Main Photo</Button>
                </Card>

                    <Card>
                        <Image
                            src={user.photoURL}
                        />
                        <div className='ui two buttons'>
                            <Button basic color='green'>Main</Button>
                            <Button basic icon='trash' color='red' />
                        </div>
                    </Card>
            </Card.Group>
        </Segment>
    )
}

export default PhotosPage;