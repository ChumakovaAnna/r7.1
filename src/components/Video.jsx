import React from "react"
import DateTime from "./DateTime"
import DateTimePretty from "./DateTimePretty";

export default function Video(props) {
  return (
      <div className="video">
        <iframe title={`iframe${props.index}`} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
        <DateTime date={props.date} />
        <DateTimePretty date={props.date}></DateTimePretty>
        
      </div>
  )
}