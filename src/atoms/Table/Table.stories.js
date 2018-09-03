/* eslint-disable no-alert */

import React from 'react';

const TABLE_DATA = [{
  id: '1',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Cecily',
  lastName: 'Oen',
  email: 'parasol@skilfish.co.uk',
}, {
  id: '2',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Dian',
  lastName: 'Wegge',
  email: 'clinanthium@illuminize.com',
}, {
  id: '3',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Preston',
  lastName: 'Bonini',
  email: 'tiza@unlovingness.net',
}, {
  id: '4',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Laveta',
  lastName: 'Unick',
  email: 'farcist@parasyphilosis.com',
}, {
  id: '5',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Lorena',
  lastName: 'Deuman',
  email: 'leucophyllous@lobectomy.co.uk',
}, {
  id: '8',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Marilu',
  lastName: 'Weiderhold',
  email: 'stich@saeume.co.uk',
}, {
  id: '9',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Delphia',
  lastName: 'Valko',
  email: 'formel@osmotherapy.org',
}, {
  id: '10',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Cleo',
  lastName: 'Galstad',
  email: 'metalworker@cuichunchulli.net',
}, {
  id: '11',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Kenyetta',
  lastName: 'Bullington',
  email: 'turbid@trilobed.edu',
}, {
  id: '12',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Carleen',
  lastName: 'Joncas',
  email: 'orthantimonic@kingbird.edu',
}, {
  id: '13',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Providencia',
  lastName: 'Cedano',
  email: 'salsola@unduke.net',
}, {
  id: '14',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Adella',
  lastName: 'Hitchen',
  email: 'calibration@undelightfully.com',
}, {
  id: '15',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Elizabeth',
  lastName: 'Bednarik',
  email: 'thallogenic@titanomachy.edu',
}, {
  id: '16',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Georgine',
  lastName: 'Piechowski',
  email: 'quadruplator@racemulose.co.uk',
}, {
  id: '17',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Matt',
  lastName: 'Sankoh',
  email: 'browed@headstand.net',
}, {
  id: '18',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jamie',
  lastName: 'Rosenhagen',
  email: 'trichorrhexic@venomousness.org',
}, {
  id: '19',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Kristel',
  lastName: 'Pillado',
  email: 'heteroglobulose@venedotian.org',
}, {
  id: '20',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Rosario',
  lastName: 'Saracino',
  email: 'overage@homogamic.org',
}, {
  id: '21',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Cyndy',
  lastName: 'Leta',
  email: 'deserted@infirmarer.co.uk',
}, {
  id: '22',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Dung',
  lastName: 'Turnell',
  email: 'ba@jahve.co.uk',
}, {
  id: '23',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Alexia',
  lastName: 'Bosket',
  email: 'presentationism@vuln.net',
}, {
  id: '24',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Hyon',
  lastName: 'Caillier',
  email: 'submicroscopic@dugway.net',
}, {
  id: '25',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jeanice',
  lastName: 'Francisco',
  email: 'trinodine@shogi.co.uk',
}, {
  id: '26',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net',
}, {
  id: '27',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Meghann',
  lastName: 'Akapo',
  email: 'monostromatic@overfavorably.com',
}, {
  id: '28',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Evangelina',
  lastName: 'Korner',
  email: 'maidenliness@semiflexion.co.uk',
}, {
  id: '29',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Kelvin',
  lastName: 'Dumlao',
  email: 'unestranged@fingered.org',
}, {
  id: '30',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Robt',
  lastName: 'Basse',
  email: 'hallway@unimbordered.org',
}, {
  id: '31',
  createdAt: '2018-09-03T10:34:15.000Z',
  updatedAt: '2018-09-03T10:34:15.000Z',
  firstName: 'Larry',
  lastName: 'Marwick',
  email: 'lashlite@stabber.edu',
}, {
  id: '32',
  createdAt: '2018-09-03T10:55:52.000Z',
  updatedAt: '2018-09-03T10:55:52.000Z',
  firstName: 'sadas',
  lastName: 'dsada',
  email: 'zouxuoz@gmail.com',
}];

export default (asStory) => {
  asStory('ATOMS/Table', module, (story, { Table, Link, Dropdown, Button, Icon, Menu, Loader }) => {
    story
      .add('table with scroll', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table.Plate>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body>
              {
                React.Children.toArray(
                  TABLE_DATA.map((client) => (
                    <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
                      <Table.BodyCell>
                        { client.id }
                      </Table.BodyCell>
                      <Table.BodyCell>
                        <Link to="/">{ `${client.firstName} ${client.lastName}` }</Link>
                      </Table.BodyCell>
                      <Table.BodyCell>
                        { client.email }
                      </Table.BodyCell>
                      <Table.BodyCell>
                        { client.createdAt }
                      </Table.BodyCell>
                      <Table.BodyCell>
                        { client.updatedAt }
                      </Table.BodyCell>
                      <Table.BodyCell>
                        <Dropdown.Plate defaultOpen={ false }>
                          <Dropdown.Head>
                            <Icon name="Dots" color="LIGHT_GRAY2" />
                          </Dropdown.Head>
                          <Dropdown.Body pin="right">
                            <Menu.Plate>
                              <Menu.Item onClick={ () => alert('Delete') }>Delete</Menu.Item>
                            </Menu.Plate>
                          </Dropdown.Body>
                        </Dropdown.Plate>
                      </Table.BodyCell>
                    </Table.BodyRow>
                  )),
                )
              }
            </Table.Body>
            <Table.Footer justifyContent="center">
              <Button onClick={ () => alert('Create') }>Create Client</Button>
            </Table.Footer>
          </Table.Plate>
        </div>
      ))
      .add('table with loader', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table.Plate>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body>
              <Loader stretch />
            </Table.Body>
            <Table.Footer justifyContent="center">
              <Button onClick={ () => alert('Create') }>Create Client</Button>
            </Table.Footer>
          </Table.Plate>
        </div>
      ));
  });
};

