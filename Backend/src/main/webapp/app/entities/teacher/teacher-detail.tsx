import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './teacher.reducer';

export const TeacherDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const teacherEntity = useAppSelector(state => state.teacher.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="teacherDetailsHeading">
          <Translate contentKey="backendApp.teacher.detail.title">Teacher</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.id}</dd>
          <dt>
            <span id="cin">
              <Translate contentKey="backendApp.teacher.cin">Cin</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.cin}</dd>
          <dt>
            <span id="numTeacher">
              <Translate contentKey="backendApp.teacher.numTeacher">Num Teacher</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.numTeacher}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="backendApp.teacher.email">Email</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.email}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="backendApp.teacher.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.lastName}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="backendApp.teacher.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{teacherEntity.firstName}</dd>
        </dl>
        <Button tag={Link} to="/teacher" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/teacher/${teacherEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TeacherDetail;
