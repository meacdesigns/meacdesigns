import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { addDocument } from "../../db/firebase";
import { Heading2 } from "../Heading/Heading";
import { nanoid } from "nanoid";

import contactImage from "./assets/contact-img.png";

const labels = {
  heading: "Any question, ask us!",
};

const ContactUsForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const openNotification = () => {
    api.success({
      message: "Thank you !!",
      description:
        "We have successfully received you message. Our team shall contact you soon.",
      duration: 3,
    });
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const docRef = await addDocument({
        collection_name: "queries",
        data: {
          ...values,
          active: true,
          id: nanoid(),
          created_on: new Date().toLocaleString("en-IN", { timeZone: "IST" }),
        },
      });
      setLoading(false);
      openNotification();
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      setLoading(false);
      console.error("Error adding document: ", e);
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      {contextHolder}
      <div className="flex shadow-contactcard w-full mb-10">
        <div className="hidden lg:block flex-1">
          <img src={contactImage} alt="" className="h-full" />
        </div>
        <div className="flex-1">
          <div className="contact-form-area px-7 py-7 lg:px-10 lg:py-10">
            <Heading2 className="pb-5 lg:pb-10" text={labels.heading} />
            <div>
              <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your Name here" />
                </Form.Item>

                <Form.Item
                  label="Your Contact Number"
                  name="mobile_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your mobile number!",
                    },
                  ]}
                >
                  <Input size="large" maxLength={10} placeholder="Your Mobile Number here" />
                </Form.Item>

                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input correct email id!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your Email here" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input.TextArea
                    size="large"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    loading={loading}
                    size="large"
                    className="bg-primary rounded-none"
                    type="primary"
                    htmlType="submit"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
