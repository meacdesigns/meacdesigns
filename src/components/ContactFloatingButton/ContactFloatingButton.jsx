import {
  PhoneOutlined,
  CustomerServiceOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import constants from "../../constants/common";

const { CONTACT_INFO } = constants;

const phoneData = CONTACT_INFO.filter(({ type }) => type === "PHONE")[0].items;

const ContactFloatingButton = () => (
  <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 40,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <a
        className="pb-3 block"
        target="_blank"
        href={`https://wa.me/${phoneData[0].whatsapp}?text=Hello`}
        rel="noreferrer"
      >
        <FloatButton icon={<WhatsAppOutlined />} />
      </a>

      <a href={phoneData[0].action}>
        <FloatButton icon={<PhoneOutlined />} />
      </a>
    </FloatButton.Group>
  </>
);
export default ContactFloatingButton;
