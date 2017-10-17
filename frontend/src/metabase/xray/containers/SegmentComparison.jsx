import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableLikeComparison from "metabase/xray/containers/TableLikeComparison";
import title from 'metabase/hoc/Title'

import { fetchSegmentComparison } from 'metabase/xray/xray'
import { getTitle } from 'metabase/xray/selectors'

const mapDispatchToProps = {
    fetchSegmentComparison
}

@connect(null, mapDispatchToProps)
@title(props => getTitle(props))
class SegmentComparison extends Component {
    render () {
        const { cost, segmentId1, segmentId2 } = this.props.params

        return (
            <TableLikeComparison
                cost={cost}
                fetchTableLikeComparison={
                    () => this.props.fetchSegmentComparison(segmentId1, segmentId2, cost)
                }
            />
        )
    }
}

export default SegmentComparison
