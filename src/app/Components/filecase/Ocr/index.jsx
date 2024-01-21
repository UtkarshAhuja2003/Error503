"use client";
import "../form/fileUpload.css";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import {
  TextractClient,
  DetectDocumentTextCommand,
  BlockType,
} from "@aws-sdk/client-textract";
import { useEffect } from "react";
import { Client, Databases, ID, Storage } from 'appwrite';
import Cookies from 'js-cookie';
export const client = new Client();

const Index = () => {
  const [files, setFiles] = useState([]);
  const [evidences, setEvidences] = useState([]);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [casetype, setCaseType] = useState("");
  const [contact, setContact] = useState("");
  const [caseagainst, setCaseAgainst] = useState("");
  const [desc, setDesc] = useState("");
  const [state, setState] = useState();
  const [court, setCourt] = useState();
  const id = Cookies.get('id');
  useEffect(() => {
    if (!id) {
      window.location.href = '/litigant/signin'
    }
  },);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('legalsarthi');

  const databases = new Databases(client);
  
  const storage = new Storage(client);

  const updateLitigant=(caseid)=>{
    var cases=[];
    const promise = databases.getDocument(
        'legalsarthi',
        'litigant',
        id
    );

    promise.then(function (response) {
        cases=response.cases;
        cases.push(caseid);
        console.log("Case",cases);
    }, function (error) {
        console.log(error);
    });
  }

  const handleFormSubmit = (updatedevidences) => {
    const caseid = JSON.stringify(Math.floor(Math.random() * 1000000));
    console.log("Case ID",caseid);
    const promise = databases.createDocument(
      'legalsarthi',
      'cases',
      ID.unique(),
      {
        litigantname: name,
        litigantid: id,
        dateofcase: date,
        litigantcontact: contact,
        caseid: caseid,
        casestatus: "Pending",
        casecourt: court,
        casedescription: desc,
        state: state,
        casetype: casetype,
        opposinglitigant: caseagainst,
        evidence: updatedevidences,
      }
    );

    promise.then(function (response) {
      updateLitigant(response.$id);
    }, function (error) {
      console.log(error);
    });
  }

  const handleSubmit = () => {
    const promises = [];
    let updatedevidences=[];
    for(var i=0;i<files.length;i++) {
      const file = files[i];
      const promise = storage.createFile('evidence', ID.unique(), file);
      
      promise.then(
        function (response) {
          updatedevidences.push(response.$id);
        },
        function (error) {
          console.log(error);
        }
      );
  
      promises.push(promise);
    }
    Promise.all(promises)
      .then(() => {
        handleFormSubmit(updatedevidences);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const onRunOCR = async (fileData) => {
    const client = new TextractClient({
      region: "us-east-1",
      credentials: {
        accessKeyId: "AKIATIJM45CKKQ3HO3OV",
        secretAccessKey: "G7ymCuNutVe+BvEWuBf86vh69WQdPcW54ysgsUpG",
      },
    });

    const byteArray = new Buffer.from(
      fileData.replace(/^[\w\d;:\/]+base64\,/g, ""),
      "base64"
    );
    const params = {
      Document: {
        Bytes: byteArray,
      },
    };

    const command = new DetectDocumentTextCommand(params);

    try {
      const data = await client.send(command);
      const filteredData = data.Blocks.filter(
        (block) => block.BlockType === "WORD"
      ).map((block) => block.Text);
      var updatedName = "";
      var updatedContact = "";
      var updatedDate = "";
      var updatedCourt = "";
      var updatedState = "";
      var updatedCaseType = "";
      var updatedOpp = "";
      var updatedDesc = "";
      var i = 4;
      while (filteredData[i] !== "Contact") {
        updatedName = updatedName + " " + filteredData[i];
        i++;
      }
      i += 2;
      updatedContact = filteredData[i];
      i += 2;
      updatedDate = filteredData[i];
      i += 2;
      while (filteredData[i] !== "State") {
        updatedCourt = updatedCourt + " " + filteredData[i];
        i++;
      }
      i += 2;
      while (filteredData[i] !== "Case") {
        updatedState = updatedState + " " + filteredData[i];
        i++;
      }
      i += 2;
      updatedCaseType = filteredData[i];
      i += 3;
      while (filteredData[i] != "Description") {
        updatedOpp += " " + filteredData[i];
        i++;
      }
      i += 2;
      while (i < filteredData.length) {
        updatedDesc += " " + filteredData[i];
        i++;
      }
      setName(updatedName);
      setContact(updatedContact);
      setDate(updatedDate);
      setCourt(updatedCourt);
      setState(updatedState);
      setCaseType(updatedCaseType);
      setCaseAgainst(updatedOpp);
      setDesc(updatedDesc);
    } catch (error) {
      console.log("OCR Error:", error);
    }
  };

  const onSelectFile = (evt, handleFile) => {
    console.log("Uploading");
    var reader = new FileReader();
    var file = evt.target.files[0];
    reader.onload = function (upload) {
      onRunOCR(upload.target.result);
    };

    reader.readAsDataURL(file);
    console.log("Uploaded");
  };

  return (
    <div>
      <div className="flex justify-between mt-6 space-x-4 w-[90%] mx-auto">
        <div>
          <h3 className="mr-6">Upload Filled form:</h3>
          <input
            className="mt-3"
            type="file"
            onChange={(e) => {
              onSelectFile(e);
            }}
          />
        </div>
        <button className=" px-4 py-2 bg-[#3ac7e7] text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300 mt-3 mb-6">
          <a href="/files/case_details.pdf" download>
            Download Template
          </a>
        </button>
      </div>
      <div className="container">
        <h1 className="py-3">Upload Evidence Files</h1>
      </div>
      <div className="container">
        <div>
          <label
            for="upload"
            className=" bg-[#3ac7e7] px-4 py-2 text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300"
          >
            <input
              className="opacity-0 hidden right-[-9999px] absolute"
              onChange={(e) => {
                setFiles(e.target.files);
                console.log("helllo");
              }}
              type="file"
              id="upload"
              multiple
            />
            Upload Files
          </label>
        </div>
        <div className="files">
          <h2>Files Selected</h2>
          <ul>
            {files.length > 0 &&
              (() => {
                const elements = [];
                for (let index = 0; index < files.length; index++) {
                  const file = files[index];
                  let suffix = "bytes";
                  let size = file.size;

                  if (size >= 1024 && size < 1024000) {
                    suffix = "KB";
                    size = Math.round((size / 1024) * 100) / 100;
                  } else if (size >= 1024000) {
                    suffix = "MB";
                    size = Math.round((size / 1024000) * 100) / 100;
                  }

                  elements.push(
                    <li key={index}>
                      {file.name}{" "}
                      <span className="file-size">
                        {size} {suffix}
                      </span>
                      <i className="material-icons md-48">
                        <MdDeleteOutline className="text-xl" />
                      </i>
                    </li>
                  );
                }
                return elements;
              })()}
          </ul>
        </div>
        <button
          onClick={() => {
            handleSubmit();
          }}
          className=" px-4 py-2 bg-[#3ac7e7] text-center rounded-md hover:bg-[#1d7adb] text-white ease-in-out duration-300 mt-3 mb-6 ml-[45%]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Index;
