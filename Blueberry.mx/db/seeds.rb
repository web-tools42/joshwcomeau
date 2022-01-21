# Start by wiping it clean
Mix.destroy_all


Mix.create!([
  {
    id:           1,
    name:         'Supersonic Overdrive',
    description:  'An exciting over-the-top mix'
  }, {
    id:           2,
    name:         'ChilZone',
    description:  'Downtempo, smooth jams'
  }, {
    id:           3,
    name:         'Pot Pourri',
    description:  'All over the place. wild.'
  }, {
    id:           4,
    name:         'D-d-d-d-d-drop the bass',
    description:  'Groundshaking bass all over the place'
  }
])