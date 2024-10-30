import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
    show: boolean;
    onHide: () => void;
}

function modal(props : ModalProps) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Mobiloqrafiya
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>
                    Biz müştərilərimizə Mobilografiya sahəsində peşəkar xidmətlər təqdim edirik. Bu xidmətlərə mobil cihazlarla çəkilən yüksək keyfiyyətli foto və video çəkilişləri, vizual məzmunun redaktəsi, sosial media üçün optimallaşdırılmış vizual məzmunun hazırlanması və müxtəlif brendlərin məhsullarının yaradıcı formada təqdim edilməsi daxildir.
                </p>
            </ModalBody>
            <ModalFooter>
                <Button className='bg-MainOrange text-white'>Paketlərimizə bax</Button>
            </ModalFooter>
        </Modal>
    );
}

export default modal;