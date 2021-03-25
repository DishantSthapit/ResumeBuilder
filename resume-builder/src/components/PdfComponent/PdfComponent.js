import React from 'react';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import Footer from '../shared/Footer/Footer';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import StepBar from '../shared/StepBar/StepBar';
import './PdfComponent.scss';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';


const PdfComponent = () => {
    const userData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const generate = () => {
        var doc = new jsPDF('portrait');
        //Heading section
        doc.setFont("times", "italic");
        doc.setFontSize(22);
        doc.text(`${userData.firstName} ${userData.lastName}`, 10, 15);
        doc.setFontSize(14);
        doc.text(`Email : ${userData.email}`, 140, 15);
        doc.text(`Phone:${userData.phoneNumber}`, 140, 23);
        doc.text(`Address:${userData.address}`, 140, 31);
        doc.setLineWidth(1);
        doc.line(10, 40, 200, 40);

        doc.setLineWidth(0.2);
        doc.line(40, 400, 40, 50);

        //Objective section
        doc.setFontSize(12);
        doc.setFont("times", "bold");
        doc.text('Objective', 10, 70);
        doc.setFont("times", "italic");

        var splitTitle = doc.splitTextToSize(`${userData.summary}`, 150);
        doc.text(splitTitle, 50, 60);

        //Skills
        doc.setFontSize(12);
        doc.setFont("times", "bold");
        doc.text('Skills', 10, 100);
        doc.setFont("times", "italic");

        splitTitle = doc.splitTextToSize(`${userData.skills[0]}`, 150);
        splitTitle = doc.splitTextToSize(`${userData.skills[1]}`, 250);
        doc.text(splitTitle, 50, 90);



        doc.save('download.pdf');
    }
    React.useEffect(() => {
        dispatch({ type: 'SETSTEP', payload: 3 })
    })
    return (
        <>
            <HeaderBar title="Successfully Created" />
            <Container>
                <StepBar />
                <button onClick={generate}>Generate PDF</button>
            </Container>
            <Footer />

        </>
    )
};

export default PdfComponent;